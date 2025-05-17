  console.log("[mainStore]");
  import { makeObservable, observable, autorun, runInAction, action, computed, toJS } from 'mobx';
  import axios from 'axios';
  // import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SIGN_IN, DASHBOARD_GET_DATA, AUTH_ERRORS } from './types';
  const { exists } = require('../tools/exists');
  import { form_info } from './data';
  const { FSTART, FSELECT, FFORM, FSUCCESS, FFAIL } = form_info.pages;

  class MainStore {
    constructor(jngservice) {
      makeObservable(this,{
        item_data: observable,
        active_form: observable,
        preview_data: observable,
        form_test: observable,
        start_page: observable,
        page: observable,
        setData: action,
        setPage: action,
        resetPages: action,
        setActiveForm: action,
        reset: action,
        setPreview: action,
        toggleTest: action,
        getItem: computed,
      });
      this.jngService = jngservice;
    }// constructor

    item_data = { 
      id: "", 
      opportunities: {}
    };// item_data doesn't need initial values
    
    active_form = "";

    preview_data = {};

    form_test = false;

    start_page = FSTART;//FSUCCESS;
    page = this.start_page;


    setData = (property, value, test = false) => {
      let target_obj = (test == false) ? this.item_data : this.test_data;
      let property_array = (property.includes(".")) ? property.split(".") : [property];

      let location = property_array.reduce((result, prop, ndx, ary) => {
        if (ndx < ary.length - 1) {
          // if im in this section i still have more object to dive into 
          // make sure it doesn't return untitled or it will break
          if (result[prop] == undefined) result[prop] = {};
          result = result[prop];
        } else {
          result[prop] = value;
          result = result[prop];
        }

        return result;
      }, target_obj);// reduce builds on target_obj
      // my other setData idea is to use root[property] = value
    }// setData

    setPage = (page) => {
      this.page = page;
    }

    resetPages = (params) => {
      this.page = this.start_page;
    }

    setActiveForm = (form) => {
      this.active_form = form;
    }

    reset = () => {
      // this.item_data = { title_data: "" };
      // this.test_data = { img_url: "", extra: "" }
      // this.init = false;
      // this.test_init = false;
      // this.restart = true;
    }

    setPreview = (val) => {
      this.preview_data = {...val};
    }

    toggleTest = (test) => {
      if(typeof test == "undefined"){
        this.form_test = !this.form_test;
      }else{
        if(typeof test != 'boolean') return;//do nothing
        this.form_test = test;
      }
    }// toggleTest

    get_json = function (tObj) {
      return toJS(tObj);
    }

    get getItem() {
      return toJS(this.item_data);
    }
    
  }// MainStore

  // const store = new DraftStore(store_api);
  const store = window.jngStore = new MainStore();

  export default store;

  autorun(() => {
    console.log("[MainStore] ITEM_DATA ", store.state);
    // console.log(store.todos[0]);
  })


// export default (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case AUTH_SIGN_UP:
//       console.log('[AuthReducer] got an AUTH_SIGN_UP action!');
//       return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
//       break;
//     case AUTH_SIGN_IN:
//       console.log('[AuthReducer] got an AUTH_SIGN_IN action!');
//       return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
//       break;
//     case AUTH_SIGN_OUT:
//       console.log('[AuthReducer] got an AUTH_SIGN_OUT action!');
//       return { ...state, token: action.payload, isAuthenticated: false, errorMessage: '' }
//       break;
//     case AUTH_ERRORS:
//       console.log('[AuthReducer] got an AUTH_ERRORS action!');
//       return { ...state, errorMessage: action.payload };
//       break;

//     default:

//   }