
RegisterMe is a component that delays addEventListener click until that page elements are loaded. 
once the elemnent is clicked it dynamically loads a react component 


### Simple form setup

#### 

_RForm.js_

```
  if(store.item_data.id == ""){
    store.setData("id", Date.now());
  }

  const updateInput = (uI) => {
    let { name } = uI;
    let values = form_data.getValues();
    // debugger;

    if (name == "title") {
      if (values[name] == "") {
        setTitleError({ error: true, message: "value is required" })
      } else {
        setTitleError({ error: false, message: "" })
      }
    }

    // for local state management
    // setItemData((prev) => {
    //   let item_update = { ...prev };
    //   item_update[`${name}`] = values[name];
    //   return item_update;
    // });

    // mobx state management
    store.setData(`${name}`, values[name]);
  }// updateInput
```

_store_

```
  @observable item_data = { id: "", title: "" };


  @action setData = (property, value, test = false) => {
    let target_obj = (test == false) ? this.item_data : this.test_data;
    let property_array = (property.includes(".")) ? property.split(".") : [property];

    let location = property_array.reduce((result, prop, ndx, ary) => {
      if (ndx < ary.length - 1) {
        result = result[prop];
      } else {
        result[prop] = value;
        result = result[prop];
      }

      return result;
    }, target_obj);// reduce builds on target_obj
    // my other setData idea is to use root[property] = value
  }// setData
```