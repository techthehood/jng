

```
  snap_btns = child_array.reduce((result, child_node, ndx) => {

    let has_export = (obj_exists(cP, "extra.export")) ? true : false;

    let mybtn = (
      <Replacement key={`snap_btn_rpl_${ndx}`} callback={(e) => {
        e.preventDefault();
        e.persist();
        let _this = this;
        demo(e.target, () => {
          _this.force_scroll.current = false;
          _this.show_section(e,"",{iUN, index:ndx, mode});
        },true);// demo
      }}/>
    );

    mybtn = has_export ? (
      <Exporter {...{ home: cP.extra.export, delay: 1 }} key={`snap_btn_exporter_${iUN}_${ndx}`}>
        {mybtn}
      </Exporter>
    ) : mybtn;

    result.push(mybtn);

    return result;
  },[]);// snap_btns child_array reduce
```

#### Exporter runs ReactDOM.createPortal

**Exporter.js**
```
  return ReactDOM.createPortal(
    <>
      {props.children}
    </>
    ,export_home
  );
```
> it puts Exporters child elements into any html element anywhere on the current webpate

NOTE: i added an initialize callback just in case the exported element needs some initialization js after it is added to the DOM