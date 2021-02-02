import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentsProps: {
      showNav: false,
      currentDate: new Date(),
      weekToShow: new Date(), // First monday of the week to show
    },
    week: []
  },
  mutations: {
    SWITCH_NAV(state) {
      state.componentsProps.showNav = !state.componentsProps.showNav;
    },
    GO_BEFORE(state, amount) {
      const date = state.componentsProps.weekToShow.toLocaleDateString("en-EN").split("/");
      let month = parseInt(date[0]);
      let day = parseInt(date[1]);
      let year = parseInt(date[2]);
      const monthDayNumber = [31, (year % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (day - amount <= 0) { // Si on dépasse le nombre de jour max dans le mois.
        if (month === 1) {
          year--;
          month = 12;
          day = day - amount + monthDayNumber[month - 1]
        } else {
          month--;
          day = day - amount + monthDayNumber[month - 1]
        }
      } else {
        day -= amount;
      }
      state.componentsProps.weekToShow = new Date(year + "-" + month + "-" + day);
    },
    GO_AFTER(state, amount) {
      const date = state.componentsProps.weekToShow.toLocaleDateString("en-EN").split("/");
      let month = parseInt(date[0]);
      let day = parseInt(date[1]);
      let year = parseInt(date[2]);
      const monthDayNumber = [31, (year % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (day + amount > monthDayNumber[month - 1]) { // Si on dépasse le nombre de jour max dans le mois.
        if (month === 12) {
          year++;
          day = day + amount - monthDayNumber[month - 1]
          month = 1;
        } else {
          day = day + amount - monthDayNumber[month - 1]
          month++;
        }
      } else {
        day += amount;
      }
      state.componentsProps.weekToShow = new Date(year + "-" + month + "-" + day);
    },
    INIT_WEEK(state) {
      while (state.componentsProps.weekToShow.getDay() !== 1) {
        let date = state.componentsProps.weekToShow.toLocaleDateString("en-EN").split("/");
        let month = parseInt(date[0]);
        let day = parseInt(date[1]);
        let year = parseInt(date[2]);

        const monthDayNumber = [31, (year % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day - 1 <= 0) {
          if (month === 1) {
            year--;
            month = 12;
            day = day - 1 + monthDayNumber[month - 1]
          } else {
            month--;
            day = day - 1 + monthDayNumber[month - 1]
          }
        } else {
          day--;
        }
        state.componentsProps.weekToShow = new Date(year + "-" + month + "-" + day);
      }

      const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
      state.week = [];
      let date = state.componentsProps.weekToShow;
      for (let i = 0; i < 7; i++) {
        state.week.push({date: date, day: days[i]});
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        const monthDayNumber = [31, (year % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day + 1 > monthDayNumber[month - 1]) {
          if (month === 12) {
            year++;
            day = day + 1 - monthDayNumber[month - 1]
            month = 1;
          } else {
            day = day + 1 - monthDayNumber[month - 1]
            month++;
          }
        } else {
          day++;
        }
        date = new Date(year + "-" + month + "-" + day);
      }
    }
  },
  actions: {
    switchNavState(context) {
      context.commit('SWITCH_NAV');
    },
    previousWeek(context) {
      context.commit('GO_BEFORE', 7);
      context.commit('INIT_WEEK');
    },
    nextWeek(context) {
      context.commit('GO_AFTER', 7);
      context.commit('INIT_WEEK');
    },
    initWeek(context) {
      context.commit('INIT_WEEK');
    }
  },
  getters: {
    isNavBarShown: state => {
      return state.componentsProps.showNav;
    },
    getDay: state => {
      return String(state.componentsProps.weekToShow.getDate()).padStart(2, "0");
    },
    getMonth: state => {
      const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
      let res = month[state.week[0].date.getMonth()];

      for (let i = 1; i < state.week.length; i++) {
        if (month[state.week[i].date.getMonth()] !== res) {
          res += (" - " + month[state.week[i].date.getMonth()])
          return res;
        }
      }

      return res;
    },
    getYear: state => {
      let res = state.week[0].date.getFullYear();

      for (let i = 1; i < state.week.length; i++) {
        if (state.week[i].date.getFullYear() !== res) {
          res += (" - " + state.week[i].date.getFullYear())
          return res;
        }
      }

      return res;
    },
    getCompleteDate: () => {
      return this.getYear() + "-" + this.getMonth() + "-" + this.getDay();
    },
    getWeek: state => {
      return state.week;
    },
    getWeekToShow: state => {
      return state.componentsProps.weekToShow;
    }
  },
  modules: {}
})
