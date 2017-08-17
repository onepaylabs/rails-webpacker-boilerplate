import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from '../styles'

const Calendar = props => (
  <div className={ styles.calendarApp }>
     <div className={ styles.container }>
       <div className={ styles.content }>
         <header className={ styles.header }>
           <navbar className={ styles.navbar }>
             <div className={ styles.headerTitle }>
               <h1>Tenx Pay Token</h1>
             </div>
           </navbar>
           <div className={ styles.issueContainer }>
             <div className="progress"></div>
             <div className="issued-amount">
               <span className="label"></span>
               <p className="amount">
                 205,218,255.9486 PAY
               </p>
             </div>
           </div>
           <div className={ styles.statusContainer }>
             <div className="statusItem">
               <span className="status-title">
                 RAISED
               </span>
               <p className="status-amount">
                 99,474.6383 ETH
               </p>
             </div>
             <div className="status-item">
               <span className="status-title">
                 USD VALUE
               </span>
               <p className="status-amount">
                 $ 29,837,765.9117
               </p>
             </div>
             <div className="status-item">
               <span className="status-title">
                 CONTRIBUTORS
               </span>
               <p className="status-amount">
                 2896
               </p>
             </div>
           </div>
         </header>
         <div className={ styles.progressContainer }>
         </div>
         <div className={ styles.overviewContainer }>
           <h2>Overview</h2>
         </div>
         <div className={ styles.infoContainer }>
           <h2>Project Info</h2>
         </div>
       </div>
     </div>
  </div>
)

Calendar.defaultProps = {
  name: 'OnePay'
}

Calendar.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(Calendar)
