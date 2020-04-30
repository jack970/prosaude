import React from 'react'
import {Link} from 'gatsby'

const InnerHeader = ({title, description}) => (
    <header className='container-fluid header' style={{backgroundColor: '#f4f9fc'}}>
        <div className='container wrapper'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 sec-name'>
                    <div className='wrapper'>
                        <Link to='/' style={{ textDecoration: 'none'}}>
                            <span className='h-group'>
                                <h1 style={{color: '#FDB700', fontWeight: '700'}}>{title}</h1>
                                <p style={{color: 'black', fontSize: '.9rem'}}>{description}</p>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right header-toolbar hidden-print'>
                    <div className='wrapper' style={{ float: 'right'}}>
                        <Link to='/sobre'  style={{ textDecoration: 'none', color:'black'}}>
                            <strong>Sobre o Site {` | `}</strong>
                            <i style={{color: '#FDB700'}} className="fas fa-question-circle"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default InnerHeader