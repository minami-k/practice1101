class Card extends React.Component{
    constructor(){
        super()

    }


    render(){
        return (
            <div className="row">
            <div className="col s2">
                <div className="card small">
                    <div className="card-content">
                        <p>Hello</p>
                        <p>{props.data.subject}</p>
                        <p>{props.data.instractor}</p>
    
                    </div>
    
                    <div className="card-action">
                        <a href="#">$50</a>
                    </div>
                </div>
                
                
                </div>
    
            
            </div>
        )
    }
}


function Card(props){
    const title="My first react"
    const value= "$50"
    function saleOn(){
        return true
    }

    
    
}
