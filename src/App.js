import React, { PureComponent } from 'react';
import { fetchImages } from './store/actions/action';
import { connect } from 'react-redux'

import HomeModal from './component/UI/Homepage/HomeModal';

class App extends PureComponent{

    state={
        userData:[],
        userDataSort:[],
        sizeSelected: [],      
    }

    componentDidMount(){
        console.time('a')
     this.props.fetchImages().then(()=>{
        
        if(this.props.userdata){
            let fetchedData=[...this.props.userdata]
           
            this.setState({
                userData: fetchedData,
                userDataSort: fetchedData
            })
            console.timeEnd('a')
        }
     })
     
    }


    filterData=(size)=>{
        let sizeSelected = [...this.state.sizeSelected]
        if(sizeSelected.indexOf(size)===-1){
            sizeSelected.push(size)
        }else{
            sizeSelected.splice(sizeSelected.indexOf(size), 1)
        }
        console.log(sizeSelected)
        let arr=[];
        if(sizeSelected.length){
        for(let key in sizeSelected){
            arr.push(...this.state.userData.filter(obj=>{
                return obj.availableSizes.includes(sizeSelected[key])
            }));
          }
          arr=arr.filter((el, i, arrC) => arrC.map(elObj => elObj.id).indexOf(el.id) === i)
        }else{
            arr=[...this.state.userData]
        }
        this.setState({
            userDataSort: arr,
            sizeSelected
        })
    
    }
    render(){
        // console.log(this.state.userData)
        console.log(this.state.userDataSort)                      
          let  homeModal=  this.state.userDataSort.map(user=>{
                                    return <HomeModal key={user.sku} img={user.img} 
                                            title={user.title} installments={user.installments}
                                             price={user.price}/>
                             })      
            return (
                <>
                <button className="ui button primary" onClick={()=>this.filterData('S')}>S</button>
                <button className="ui button yellow" onClick={()=>this.filterData('M')}>M</button>                
                <button className="ui button yellow" onClick={()=>this.filterData('XS')}>XS</button> 
                <button className="ui button yellow" onClick={()=>this.filterData('L')}>L</button> 
                <button className="ui button yellow" onClick={()=>this.filterData('XL')}>XL</button> 
                <button className="ui button yellow" onClick={()=>this.filterData('ML')}>ML</button> 
                <button className="ui button yellow" onClick={()=>this.filterData('XXL')}>XXL</button> 
                <div className="ui grid">
                {homeModal}
                </div> 
                </>
            )
    }
}

const mapStateToProps=(state)=>{   
    return {
        userdata: state.userDetail.userdata
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchImages:()=> dispatch(fetchImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);