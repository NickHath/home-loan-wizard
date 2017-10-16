import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter, Route } from 'react-router-dom';


export default (
    <HashRouter>
        <div>
            
                <Route exact path= '/' component ={ NextBtn }  />

                <Route path='/wOne' component ={ WizardOne } />
                <Route path="/wTwo" component ={ WizardTwo } />
                <Route path="/wThree" component ={ WizardThree } />
                <Route path='/wFour'  component ={ WizardFour } />
                <Route path="/wFive" component ={ WizardFive } />
                <Route path="/wSix" component ={ WizardSix }/>
                <Route path="/wSeven" component ={ WizardSeven }/>
                <Route 
                    path="/wEight" 
                    render={ ()=> <WizardEight 
                                    history={history} 
                                    updateHistory ={updateHistory} /> } 
                />
                <Route
                    path="/wNine" 
                    render={ ()=> <WizardNine 
                                    addressOne={addressOne} 
                                    addressTwo={addressTwo} 
                                    addressThree={addressThree} 
                                    updateAddLineOne={updateAddLineOne} 
                                    updateAddLineTwo={updateAddLineTwo} 
                                    updateAddLineThree={updateAddLineThree} /> } 
                />
                <Route 
                    path="/wTen"
                    render={ ()=> <WizardTen 
                                    firstName={firstName} 
                                    lastName={lastName} email={email} 
                                    updateFirst={updateFirst} 
                                    updateLast={updateLast} 
                                    updateEmail={updateEmail} /> } 
                />
                <Route 
                    path="/wEleven"
                    render={ ()=> <WizardEleven 
                                    firstName={firstName} 
                                    lastName={lastName} 
                                    email={email} 
                                    loanType={loanType} 
                                    propType={propType} 
                                    propToBeUsedOn={propToBeUsedOn} 
                                    city={city} 
                                    found={found} 
                                    realEstateAgent={realEstateAgent} 
                                    downPayment={downPayment} 
                                    cost={cost} 
                                    credit={credit} 
                                    history={history} 
                                    addressOne={addressOne}
                                    addressTwo={addressTwo} 
                                    addressThree={addressThree} /> } 
                />
                <Route path='/finish' component={Finish} />
            </div>
    </HashRouter>
);




 