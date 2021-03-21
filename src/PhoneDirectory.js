import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Shilpa',
                phone: '8888888s88'
            }, {
                id: 2,
                name: 'Srishti',
                phone: '999999999'
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscribersList;
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({ subscribersList: subscriberList });
        console.log(this.state.subscribersList);
    }

    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            <ShowSubscribers subscriberList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;