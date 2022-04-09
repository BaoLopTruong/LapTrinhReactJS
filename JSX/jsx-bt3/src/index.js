import './index.css';
import { createRoot } from 'react-dom/client';

// const info=
//   {
//     name: "Le Ngoc Bao",
//     avatar: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/193328816_4380531752005148_3865120816637615726_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mWqBecExsn0AX_FhFlS&_nc_oc=AQkloQTvGaMS6MvO2-LkvzfWhKhMfO7fexwPI8aMTuRpxWSp-gPldZtgr9U8G191ap8&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-eDFM4nNBxnZEXyuyGokH_9GBXxMcCuUGRk_Bv3g4OyQ&oe=62571502",
//     retail: " Once day is coder, Always is coder"
//   }

//bai tap 3: Tạo Element thể hiện Profile Card

const show =(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/193328816_4380531752005148_3865120816637615726_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mWqBecExsn0AX_FhFlS&_nc_oc=AQkloQTvGaMS6MvO2-LkvzfWhKhMfO7fexwPI8aMTuRpxWSp-gPldZtgr9U8G191ap8&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-eDFM4nNBxnZEXyuyGokH_9GBXxMcCuUGRk_Bv3g4OyQ&oe=62571502" alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Le Ngoc Bao</p>
          <p className="text-sub">
          Once day is coder, Always is coder
          </p>
          <button className="btn third" >FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(show);
