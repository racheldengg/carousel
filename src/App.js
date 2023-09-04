import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carroussel from "./Carousel";
import { useState } from 'react'
import Popup from "./Popup";
// import { getPopupIndex } from "./Carousel";

function App(props) {
  const cards = [
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" title="0" popupOpen={null}/>
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" title='1' popupOpen={null}/>
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" title='2' popupOpen={null}/>
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" title='3' popupOpen={null}/>
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" title='4' popupOpen={null}/>
        )
      }
    ];

  return (
    <div className="">
      <Carroussel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
