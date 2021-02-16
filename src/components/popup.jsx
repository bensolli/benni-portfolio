import React from 'react';
import { Link } from 'react-router-dom';

export default ({header}) => {
    return (
        <>
                <div className="[ popupwrapper_header ]">
                    <div className="[ popupwrapper_header_btn ]">
                    <Link to="/Desktop"><button className="[ popupwrapper_header_btn-1 ]"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQyOTk5OTk5OTk5OTk5OTk0LDAsMCwwLjQzMDAwMDAwMDAwMDAwMDA1LDE0NS45MTk5OTU2NTEyNDUyMiwxNDUuOTE5ODkxMjgxMTI3OTUpIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yODQuMjg0LDI1Nkw1MDYuMTQyLDM0LjE0MmM3LjgxMS03LjgxLDcuODExLTIwLjQ3NCwwLTI4LjI4NGMtNy44MTEtNy44MTEtMjAuNDc0LTcuODExLTI4LjI4NCwwTDI1NiwyMjcuNzE2ICAgIEwzNC4xNDIsNS44NThjLTcuODExLTcuODExLTIwLjQ3NC03LjgxMS0yOC4yODQsMGMtNy44MTEsNy44MS03LjgxMSwyMC40NzQsMCwyOC4yODRMMjI3LjcxNiwyNTZMNS44NTgsNDc3Ljg1OCAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NCwwLDI4LjI4NGM3LjgxLDcuODEsMjAuNDczLDcuODExLDI4LjI4NCwwTDI1NiwyODQuMjg0bDIyMS44NTgsMjIxLjg1OCAgICBjNy44MSw3LjgxLDIwLjQ3Myw3LjgxMSwyOC4yODQsMGM3LjgxMS03LjgxMSw3LjgxMS0yMC40NzQsMC0yOC4yODRMMjg0LjI4NCwyNTZ6IiBmaWxsPSIjODk4OTg5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" /></button></Link>
                        

                    </div>
                    <div className="[ popupwrapper_header_title ]"><h2>{header}</h2></div>
                </div>
        </>
    )
}
                        /*<button className="[ popupwrapper_header_btn-darkmode ]"></button>*/