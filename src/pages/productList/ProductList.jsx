import './productList.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { productRows } from '../../data';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 180, renderCell: (params) => {
            return (
                <>
                <div classmane='productListItem'>
                    <img className='productListImg' src={params.row.img} alt='' />
                </div>
                {params.row.name}
                </>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={'/product/'+params.row.id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                </>
            )
        } },
    ];

    return (
        <div className='productList'>
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}

export default ProductList
