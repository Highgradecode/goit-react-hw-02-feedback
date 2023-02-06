import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { AppWrapper } from "./AppWrapper.styled";

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedbackPercentage: '',
  }

  addFeedback = (el) => {
    const feedbackName = el.target.dataset.feedbackName;

    this.setState({
      [feedbackName]: this.state[feedbackName] + 1
    })

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback = () => {
    this.setState(prevState => {
      return({
        total: prevState.good + prevState.neutral + prevState.bad
      });
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState( prevState =>{
      return ({
        positiveFeedbackPercentage: Math.floor((prevState.good / prevState.total) * 100) + '%'
      })
    } )
  } 



  render(){
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
           <FeedbackOptions feedback ={this.addFeedback}/>
        </Section>

        <Section title="Statistics">
            {this.state.total === 0 
            ?
            <Notification message="There is no feedback"/>
            :
            <Statistics stats={this.state}/>
            }
        </Section>
      </AppWrapper>
    );
  };


} 

