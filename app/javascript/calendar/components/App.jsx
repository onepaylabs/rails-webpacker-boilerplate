import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from '../styles'

const Calendar = props => (
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
          <div className={ styles.statusItem} >
            <span className="status-title">
              RAISED
            </span>
            <p className="status-amount">
              99,474.6383 ETH
            </p>
          </div>
          <div className={ styles.statusItem}>
            <span className="status-title">
              USD VALUE
            </span>
            <p className="status-amount">
              $ 29,837,765.9117
            </p>
          </div>
          <div className={ styles.statusItem }>
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
        <h2 className="caption">ICO progress</h2>
      </div>
      <div className={ styles.overviewContainer }>
        <h2 className="caption">Overview</h2>
        <ul>
          <li>Raise Token: ETH</li>
          <li>Issue Token: PAY</li>
          <li>Cap. : 200,000 ETH</li>
        </ul>
      </div>
      <div className={ styles.infoContainer }>
        <h2 className="caption">Project Info</h2>
        <p className="description">
          TenX is a Singapore based company, with strong industry support having graduated from the PayPal startup incubation program. TenX has successfully completed beta testing with 1.000 users in Singapore as well as further beta testers in all major countries giving a multi-blockchain debit card and mobile wallet to their users who can then spend their crypto-assets anywhere in the world online and offline without any forex- or transaction fees.
        </p>
        <p className="description">
          <h4>Summary</h4>
        </p>
      </div>

      <div>        
        <h2>Risk & Disclaim</h2>
        <p>
          The ICO Dapp provided by Consenlabs may be freely used, and that the following disclaimer is always attached to it.
The listed ICO projects are provided as is without any guarantees or warranty.
Although ConsenLabs will attempt to find and correct any bugs in the ICO Dapp, ConsenLabs is not responsible for any damage or losses of any kind caused by the investment into ICO projects, user or misuse of the ICO Dapp.
ConsenLabs is under no obligation to provide support, service, corrections, or upgrades to the ICO projects.
For more information, please email to support@consenlabs.com
        </p>
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
