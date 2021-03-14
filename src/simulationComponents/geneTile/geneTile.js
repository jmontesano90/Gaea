//Renders all the specific up to date information about a certain trait for a certain species

import React, { Component } from 'react';
import dnaHelper from '../../dnaHelper';
import Collapsible from 'react-collapsible';
import DnaHelper from '../../dnaHelper';
import './geneTile.css';

class GeneTile extends Component {

  goBack = () => {
    this.props.history.goBack(); 
};
  render() {
    let traitInfo;
    if (this.props.location) {
      let genes = this.props.location.state.listOfGenes.split('');
      let color = '';
      if (this.props.location.state.speciesNumber === 0) {
        color = 'Red';
      } else if (this.props.location.state.speciesNumber === 1) {
        color = 'Blue';
      } else if (this.props.location.state.speciesNumber === 2) {
        color = 'Green';
      }
      let valuesClass = '';
      let valuesO = '';
      if (genes.length === 4) {
        valuesClass = 'values4 ';
        valuesO = 'valuesO4 ';
      } else if (this.props.location.state.name === 'GR') {
        valuesClass = 'values6 ';
        valuesO = 'values6 ';
      } else {
        valuesClass = 'values6 ';
        valuesO = 'values6 ';
      }

      let half = Math.ceil(genes.length / 2);
      let genesTest = genes.splice(0, half);
      
    

      let geneChange = genesTest.map((data, index) => {
        let percentChange = this.props.location.state[data]- Math.round((this.props.location.state.expressionValues[0][
            this.props.location.state.speciesNumber + 1][data] / 6) *100);
        let percentChangeDomCss;
        let percentChangeRecCss
           if (percentChange > 0){
             percentChangeDomCss = 'green';
             percentChangeRecCss = 'red';
           } else if (percentChange < 0){
             percentChangeDomCss = 'red';
             percentChangeRecCss = 'green';
           }
         return(<div className='twoTrait'><section className='oneTrait'>
         {data}: <span className={percentChangeDomCss}>{percentChange}%</span>    
       </section>
       <section className='oneTrait'>
         {data.toLowerCase()}: <span className={percentChangeRecCss}>{percentChange * -1}%</span>    
       </section>
       </div>)   
        
      })

      let originalValue = 0;
      //let plantCount = this.props.location.state.expressionValues[this.props.location.state.expressionValues.length - 1][this.props.location.state.speciesNumber + 1].total;

      let i;
      for (i = 0; i < genesTest.length; i ++){
        originalValue +=   Math.round((((this.props.location.state.expressionValues[0][
                    this.props.location.state.speciesNumber + 1
                   ][genesTest[i]] /
                     6)) * DnaHelper.dnaKey[genesTest[i]][0]))

                     originalValue +=   Math.round((((this.props.location.state.expressionValues[0][
                      this.props.location.state.speciesNumber + 1
                     ][genesTest[i].toLowerCase()] /
                       6)) * DnaHelper.dnaKey[genesTest[i].toLowerCase()][0]))

      }

      let currentValue = 0;
      let y;

      for (y = 0; y< genesTest.length; y++){
        currentValue += Math.round((this.props.location.state[genesTest[y]]/100) * DnaHelper.dnaKey[genesTest[y]][0]) 
        currentValue += Math.round((this.props.location.state[genesTest[y].toLowerCase()]/100) * DnaHelper.dnaKey[genesTest[y].toLowerCase()][0])
      }

      let originalCSS;
      let currentCSS;
      if (originalValue > currentValue){
            originalCSS = "green";
            currentCSS = 'red';
      } else if (currentValue > originalValue){
        originalCSS = 'red';
        currentCSS = 'green';
      }


      let currentValuesTest = genesTest.map((data, index) => (
        <section className='oneTrait'>
          <div>
            {data}/{genes[index]}
          </div>
          <div>
            {this.props.location.state[data]}/
            {this.props.location.state[genes[index]]}
          </div>
        </section>
      ));

      let originalValuesTest = genesTest.map((data, index) => (
        <section className='oneTrait'>
          <div>
            {data}/{genes[index]}
          </div>
          <div>
            {Math.round(
              (this.props.location.state.expressionValues[0][
                this.props.location.state.speciesNumber + 1
              ][data] /
                6) *
                100
            )}
            /
            {Math.round(
              (this.props.location.state.expressionValues[0][
                this.props.location.state.speciesNumber + 1
              ][genes[index]] /
                6) *
                100
            )}
          </div>
        </section>
      ));

      let dnaValues = this.props.location.state.listOfGenes
        .split('')
        .map((data, index) => (
          <section className='dnaValues'>
            {data}: {dnaHelper.dnaKey[data]}
          </section>
        ));

      traitInfo = (
        <div className='traitInformation SBG'>
                    <button className='backButton simulationButton' onClick={this.goBack}>
          Back
        </button>
          <h2 className='title'>
            {color}: {this.props.location.state.title} 
          </h2>

          <h4 className='oneTrait'>Average Value for {color} {this.props.location.state.title}</h4>
          <div className='niceBorder'>
          <div className='oneTrait'>Current Average: <span className={currentCSS}>{currentValue}</span></div>
          <div className='oneTrait'>Original Average: <span className={originalCSS}>{originalValue}</span></div>
          </div>
          <h4 className='oneTrait marginTop'>Percent Change in gene expression</h4>
          <div className='niceBorder'>{geneChange}</div>
          {/* <h4 className='explanation2'>Above is the percent change in dominant gene expression since the beginning of the simulation.  So if a dominant gene is expressed five percent less, the recessive trait is being expressed five percent more.</h4> */}
         <Collapsible trigger="Additional Gene Information">
            <h2>Trait Values</h2>
            <div className={valuesO}> {dnaValues}</div>
            <br></br>
            {DnaHelper.traitExplanation[this.props.location.state.name]}

          <div>
            <div className='valueTitles'>
              <h4 className='align'>Current Values</h4>
              <h4 className='align'>Original Values</h4>
            </div>
            <div className='valuesBox'>
              <section className={valuesClass}>{currentValuesTest}</section>
              <section className={valuesClass}>{originalValuesTest}</section>
            </div>
          </div>

          </Collapsible>
        </div>
      );
    }
    return <div>{traitInfo}</div>;
  }
}

export default GeneTile;
