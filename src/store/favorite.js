export default ({
    namespaced: true,
    state: {
      favorites: {},
      favoritesLength: 0,
    },
    actions: {
      getFavorite(context) {
        const favoriteDatas = JSON.parse(localStorage.getItem('favoriteDatas')) || [];
        context.commit('FAVORITES', favoriteDatas);
        context.commit('FAVORITES_LENGTH', favoriteDatas.length);
        context.dispatch('productsModules/getProducts', { isPagination: false }, { root: true });
      },
      addToFavorite(context, product) {
        const favoriteData = {
          id: product.id,
          title: product.title,
        };
        context.commit('PUSH_FAVORITE', favoriteData);
        localStorage.setItem('favoriteDatas', JSON.stringify(context.state.favorites));
        context.dispatch('getFavorite');
        context.dispatch('alertMessageModules/updateMessage', { message: '已加入我的最愛', status: 'success' }, { root: true });
      },
      removeFavorite(context, { favoriteItem, delall }) {
        if (delall) {
          localStorage.removeItem('favoriteDatas');
        } else {
          context.commit('REMOVE_FAVORITE', favoriteItem);
          localStorage.setItem('favoriteDatas', JSON.stringify(context.state.favorites));
        }
        context.dispatch('getFavorite');
        context.dispatch('alertMessageModules/updateMessage', { message: '已刪除我的最愛', status: 'warning' }, { root: true });
      },
    },
    mutations: {
      FAVORITES(state, payload) {
        state.favorites = payload;
      },
      FAVORITES_LENGTH(state, payload) {
        state.favoritesLength = payload;
      },
      PUSH_FAVORITE(state, favorite) {
        state.favorites.push(favorite);
      },
      REMOVE_FAVORITE(state, favorite) {
        state.favorites.forEach((item, index) => {
          if (item.id === favorite.id) {
            state.favorites.splice(index, 1);
          }
        });
      },
    },
    getters: {
      favorites: state => state.favorites,
      favoritesLength: state => state.favoritesLength,
    },
  });