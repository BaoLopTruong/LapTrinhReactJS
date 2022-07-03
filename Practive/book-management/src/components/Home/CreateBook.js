import { useEffect, useState } from "react";
import { useSelector } from "react-redux"


export default function CreateBook() {

    const books = useSelector(state => state.books);
    const [newbook, setNewBook] = useState({})
    const newId = books[books.length-1].id +1;
    
    useEffect(() => {
        setNewBook({
            ...newbook,
            id: newId
        })
    }, [newId]);

    const handleChange = (e) =>{

    }
    return (
        <div className="create-book">
            <form className="row">
                <div className="form-group col-md-3">
                    <label className="control-label">Mã sản phẩm </label>
                    <input className="form-control" type="number" placeholder="" name='id' readOnly value={newId}></input>
                </div>
                <br></br>
                <div className="form-group col-md-3">
                    <label className="control-label">Tên sản phẩm</label>
                    <input className="form-control" type="text" name='name' onChange={handleChange} ></input>
                </div>
                <div className="form-group  col-md-3">
                    <label className="control-label">Số lượng</label>
                    <input className="form-control" type="number" name='amount' onChange={handleChange} ></input>
                </div>
                <div className="form-group col-md-3 ">
                    <label htmlFor="exampleSelect1" className="control-label">Tình trạng</label>
                    <select className="form-control" id="exampleSelect1" name='status' onChange={handleChange}>
                        <option value="none">-- Chọn tình trạng --</option>
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                    </select>
                </div>
            </form>
        </div>
    )
}