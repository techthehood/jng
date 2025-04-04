


import { renderToMjml, Mjml, MjmlHead, MjmlStyle, MjmlBody, MjmlSection, 
  MjmlColumn, MjmlDivider, MjmlText, MjmlAttributes, MjmlSelector } from '@luma-team/mjml-react';
import mjml2html from 'mjml-browser';
const { form_info, agency_items, edu_items, gen_items, html_parts } = require('../../../jng');
import { obj_exists } from '../../../../../tools/exists';

// from controllers/
// import RHead from '../js/components/Register/lib/RHead';
// import RInfo from '../js/components/Register/lib/RInfo';
// // import RawHide from '../../RawHide';
// import RField from '../js/components/Register/lib/RField';
// import RList from '../js/components/Register/lib/RList';
// import RCheck from '../js/components/Register/lib/RCheck';

// from Register/lib/
import RHead from './RHead';
import RInfo from './RInfo';
// import RawHide from '../../RawHide';
import RField from './RField';
import RList from './RList';
import RCheck from './RCheck';

export const mail_template = (body) => {
  const active_form = body.active_form;
  const item_data = body.message;

  // wrap RForm Components in mjml components
  const form_title = obj_exists(form_info, `select.${active_form}.title`) ? form_info.select[`${active_form}`].title : "";

  const label_style = { display: "inline-block", paddingBottom: "0.25rem"};
  const input_style = { border: "1px solid #ccc", border: "1px solid #ccc", padding: "0.5rem 1rem", borderRadius: "0.5rem",
  height: ".75rem" };
  
  // const { html } = render(
  const mjmlString = renderToMjml(
    <Mjml>
      <MjmlHead>
        {/* <MjmlAttributes>
          <MjmlSelector path=".custom div">
            <MjmlAttributes name="data-id">42</MjmlAttributes>
            <MjmlAttributes name="class">big-div</MjmlAttributes>
          </MjmlSelector>
        </MjmlAttributes> */}
        {/* <MjmlStyle inline="inline">
          td div{
            border: 1px solid blue !important;
          }
        </MjmlStyle>
        <MjmlStyle>
          td div{
            background-color: red !important;
          }
        </MjmlStyle> */}
      </MjmlHead>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText>
            <RHead {...{ image: form_info.info.image, title: form_info.info.title }} />
            </MjmlText>
            <MjmlText>
              <div className="rForm_active">{form_title}</div>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn width="60%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{ variant: `${form_info.form[`${"name"}`].variant}`, no_form: true, 
                attrib: { ...form_info.form[`${"name"}`].attrib, value: item_data.name, 
                label_style: label_style, dummy_style: input_style, } }} />
            </MjmlText>
          </MjmlColumn>
          {["contractor", "agency"].includes(active_form) ? 
          <MjmlColumn width="30%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{ variant: `${form_info.form[`${"title"}`].variant}`, no_form: true, 
              attrib: { ...form_info.form[`${"title"}`].attrib, value: item_data.title, 
              label_style: label_style, dummy_style: input_style,} }} />
            </MjmlText>
          </MjmlColumn>
            : null}
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn width="60%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{ variant: ``, no_form: true, 
                attrib: {name:"company", type:"text", id:"company", label:"Company", value: item_data.company,
                label_style: label_style, dummy_style: input_style,} }} />
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="30%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{ variant: ``, no_form: true, 
                attrib: {name:"type", type:"text", id:"type", label:"Type", value: item_data.type,
                label_style: label_style, dummy_style: input_style,} }} />
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn width="60%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{
                variant: ``, no_form: true,
                attrib: {
                  name: "address", type: "text", id: "address", label: "address", value: item_data.address,
                  label_style: label_style, dummy_style: input_style,
                }
              }} />
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="30%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{
                variant: ``, no_form: true,
                attrib: {
                  name: "suite", type: "text", id: "suite", label: "suite", value: item_data.suite,
                  label_style: label_style, dummy_style: input_style,
                }
              }} />
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn width="55%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{
                variant: ``, no_form: true,
                attrib: {
                  name: "city", type: "text", id: "city", label: "city", value: item_data.city,
                  label_style: label_style, dummy_style: input_style,
                }
              }} />
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="15%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{
                variant: ``, no_form: true,
                attrib: {
                  name: "state", type: "text", id: "state", label: "state", value: item_data.state,
                  label_style: label_style, dummy_style: input_style,
                }
              }} />
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="25%" fluid-on-mobile="true">
            <MjmlText>
              <RField {...{
                variant: ``, no_form: true,
                attrib: {
                  name: "zip", type: "text", id: "zip", label: "zip code", value: item_data.zip,
                  label_style: label_style, dummy_style: input_style,
                }
              }} />
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

      </MjmlBody>
    </Mjml>
  );// render

  // const mjmlString = renderToMjml(<Mjml>...</Mjml>));

  const html = mjml2html(mjmlString);

  return html;
}
/**
<fieldset className={`w3-col m7 s8`}>
            <CustomInput
              name="city"
              type="text"
              id="city"
              label="city"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.city}
            />
          </fieldset>
          <fieldset className={`w3-col m2 s4`}>
            <CustomInput
              name="state"
              type="text"
              id="state"
              label="state"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.state}
            />
          </fieldset>
          <fieldset className={`w3-col m3`}>
            <CustomInput
              name="zip"
              type="text"
              id="zip"
              label="zip code"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.zip}
            />
          </fieldset>
 */

/**

<MjmlSection>
  <MjmlColumn>
    <MjmlText>
    </MjmlText>
  </MjmlColumn>
</MjmlSection>

 */