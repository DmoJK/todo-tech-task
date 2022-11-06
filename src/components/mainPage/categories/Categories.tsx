import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './Categories.module.css'

const Categories: FC = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const handleNavigate = (url: string) => (event: React.MouseEvent) => {
        navigate(url)
    }
    let path = pathname.split('/')
    path.shift()
    const handleClick = (pathClick: string) => (event: React.MouseEvent) => {
        if ('/' + pathClick !== pathname) {
            if ('/' + path[0] + '/' + pathClick !== pathname) {
                navigate(`/${pathClick}`)
            }
        }
    }

    return (
        <div className={style.categories}>
            <ul>
                <div className={style.navigation} >
                    {path.map(p => <div onClick={handleClick(p)} key={p}>/ {p === '' ? 'best' : p} </div>)}
                </div>
                <li className={style.category} >
                    <div onClick={handleNavigate('/')}>Лучшее предложение</div>
                </li>
                <li className={style.category} >
                    <div onClick={handleNavigate('/dogs')}>Товары для собак</div>
                    <div className={style.subcategory}>
                        <div onClick={handleNavigate('/dogs/syxoi')}>
                            <span>сухой корм</span>
                        </div>
                        <div onClick={handleNavigate('/dogs/organic')}>
                            <span>натуральная еда</span>
                        </div>
                        <div onClick={handleNavigate('/dogs/canned')}>
                            <span>консервы</span>
                        </div>
                        <div onClick={handleNavigate('/dogs')}>
                            <span>показать всё</span>
                        </div>
                    </div>
                </li>
                <li className={style.category}>
                    <div onClick={handleNavigate('/cats')}>Товары для кошек</div>
                    <div className={style.subcategory}>
                        <div onClick={handleNavigate('/cats/syxoi')}>
                            <span>сухой корм</span>
                        </div>
                        <div onClick={handleNavigate('/cats/organic')}>
                            <span>натуральная еда</span>
                        </div>
                        <div onClick={handleNavigate('/cats/canned')}>
                            <span>консервы</span>
                        </div>
                        <div onClick={handleNavigate('/cats')}>
                            <span>показать всё</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Categories