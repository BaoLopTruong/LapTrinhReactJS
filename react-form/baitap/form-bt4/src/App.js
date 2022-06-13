
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <h2>Tờ khai y tế</h2>
        <div className='input-name'>
          <label>Họ và tên</label>
          <br></br>
          <input type='text' name= 'fullname'></input>
        </div>
        <br></br>
        <div className='input-cmnd'>
          <label>Hộ chiếu / CMND</label>
          <br></br>
          <input type='number' name='cmnd'></input>
        </div>
        <br></br>
        <div className='input-yearofbirth'>
          <label>Năm sinh</label>
          <br></br>
          <input type='number' name='yearofbirth'></input>
        </div>
        <div className='input-gender'>
          <label>Giới tính</label>
          <input type='checkbox'></input> Nam        
          <input type='checkbox'></input> Nữ
        </div>
        <br></br>
        <div className='input-nationality'>
          <label>Quốc tịch</label>
          <br></br>
          <input type='text' name='nationality'></input>
        </div>
        <br></br>
        <div className='input-working-company'>
          <label>Công ty làm việc</label>
          <br></br>
          <input type='text' name='working-company'></input>
        </div>
        <br></br>
        <div className='input-working-parts'>
          <label>Bộ phận làm việc</label>
          <br></br>
          <input type='text' name='working-parts'></input>
        </div>
        <br></br>
        <div className='input-isCardYte'>
          <label>Có thẻ bảo hiểm y tế</label>
          <input type='checkbox' name='isCard'></input>
        </div>
        <br></br>
        <h2>Địa chỉ liên lạc tại Việt Nam</h2>
        <br></br>
        <div className='input-city'>
          <label>Tỉnh, thành</label>
          <br></br>
          <input type='text' name='city'></input>
        </div>
        <br></br>
        <div className='input-district'>
          <label>Quận, huyện</label>
          <br></br>
          <input type='text' name='district'></input>
        </div>
        <br></br>
        <div className='input-phuong'>
          <label>Phường, xã</label>
          <br></br>
          <input type='text' name='phuong'></input>
        </div>
        <br></br>
        <div className='input-numberhouse'>
          <label>Số nhà, phố, tổ dân phố/thôn/đội</label>
          <br></br>
          <input type='text' name='number-house'></input>
        </div>
        <div className='input-numberphone'>
          <label>Số điện thoại</label>
          <br></br>
          <input type='number' name='number-phone'></input>
        </div>
        <div className='input-email'>
          <label>Email</label>
          <br></br>
          <input type='email' name='email'></input>
        </div>
      </form>
    </div>
  );
}

export default App;
