import {lazy, Suspense} from 'react'
import Feat from './components/Feat/Feat';
import Countdown from './components/Countdown';
import { main_data } from '../Main/data';
import Show from './components/Show';
import Promo from '../elements/Promo';
import {july21, july22, nov21, promo, feat} from './events_data';
/**
 * DOCS fix for body font-size conflict in the bundle.css file - now loads Events.scss in a separate file
 * NOW Doc defer techniques
 */
const DeferMe = lazy(() => import(/* webpackChunkName: "templates/Events" */ `./DeferMe`));



const Events = () => {
  return (
    <>
    <Feat {...{ data: feat }}/>
    <Countdown/>
    <Promo {...{ data: promo }}/>
    <Show {...july22}/>
    <Show {...nov21}/>
    <Show {...july21}/>
    {/* <Show {...{has_background: true, card: true}}/> */}
    <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
      <DeferMe/>
    </Suspense>
    </>
  )
}

export default Events