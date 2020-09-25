
import ReactDOM from 'react-dom';
import axios from "axios";
import React,{Component} from  'react';
import Country from './usercard.js';
import './App.css';
import Card from "react-bootstrap/Card";

class Counters extends Component {
	 constructor(props)
    {
      super(props);
      this.state = {
      	moviename:"",
      	data:[],
      	
      }
 
      this.handlechange = this.handlechange.bind(this);
    }
	async componentDidMount()
	{
 
const res=[
  {
    "id": "123-s2-546",
    "name": "John Jacobs",
    "items": ["bucket", "bottle"],
    "address": "1st Cross, 9th Main, abc Apartment",
    "pincode": "5xx012"
  },
  {
    "id": "123-s3-146",
    "name": "David Mire",
    "items": ["Bedroom Set"],
    "address": "2nd Cross, BTI Apartment",
    "pincode": "4xx012"
  },
  {
    "id": "223-a1-234",
    "name": "Soloman Marshall",
    "items": ["bottle"],
    "address": "Riverbed Apartment",
    "pincode": "4xx032"
  },
  {
    "id": "121-s2-111",
    "name": "Ricky Beno",
    "items": ["Mobile Set"],
    "address": "Sunshine City",
    "pincode": "5xx072"
  },
  {
    "id": "123-p2-246",
    "name": "Sikander Singh",
    "items": ["Air Conditioner"],
    "address": "Riverbed Apartment",
    "pincode": "4xx032"
  },
  {
    "id": "b23-s2-321",
    "name": "Ross Wheeler",
    "items": ["Mobile"],
    "address": "1st Cross, 9th Main, abc Apartement",
    "pincode": "5xx012"
  },
  {
    "id": "113-n2-563",
    "name": "Ben Bish",
    "items": ["Kitchen Set", "Chair"],
    "address": "Sunshine City",
    "pincode": "5xx072"
  },
  {
    "id": "323-s2-112",
    "name": "John Michael",
    "items": ["Refrigerator"],
    "address": "1st Cross, 9th Main, abc Apartement",
    "pincode": "5xx012"
  },
  {
    "id": "abc-34-122",
    "name": "Jason Jordan",
    "items": ["Mobile"],
    "address": "Riverbed Apartment",
    "pincode": "4xx032"
  }
]
 this.setState({
		data:res
	});
	console.log(this.state.data);
	console.log(res.data);
	}
	handlechange(e) {
    this.setState({
        moviename: e.target.value
    })
    console.log(this.state.moviename)
}
   render(){
   	
    	 
    
	const items = this.state.data.filter((data)=>{
      if(this.state.moviename)
       if(data.pincode.toLowerCase().includes(this.state.moviename.toLowerCase())|| data.id.toLowerCase().includes(this.state.moviename.toLowerCase())||data.name.toLowerCase().includes(this.state.moviename.toLowerCase()) || data.address.toLowerCase().includes(this.state.moviename.toLowerCase())){
          return data
      }

    })
	
    		 
		console.log({items});
		var x=items.length
		console.log(x);

		return (
			<div>
			<div className="h">
			<input  className="p" type="text"   placeholder="Search by userId by name by address"onChange={this.handlechange} />
			</div>
				<table >
		<tbody>
		{
			x==0&&this.state.moviename?<Card style={{ width: '18rem' }}><Card.Body>
			<Card.Title>Not found</Card.Title></Card.Body></Card>:
		items.map(country=>(
	<Country cou={country} />
			))}
		</tbody>
		</table>
	</div>
		);

	}
}

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

