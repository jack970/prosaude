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
                                <h1 style={{color: '#FDB700'}}>{title}</h1>
                                <p style={{color: 'black'}}>{description}</p>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right header-toolbar hidden-print'>
                        <Link to='/'  style={{ textDecoration: 'none', color:'black'}}>
                            Fale Conosco {` | `}
                            <svg class="bi bi-envelope-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M.05 3.555L8 8.414l7.95-4.859A2 2 0 0014 2H2A2 2 0 00.05 3.555zM16 4.697l-5.875 3.59L16 11.743V4.697zm-.168 8.108L9.157 8.879 8 9.586l-1.157-.707-6.675 3.926A2 2 0 002 14h12a2 2 0 001.832-1.195zM0 11.743l5.875-3.456L0 4.697v7.046z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default InnerHeader