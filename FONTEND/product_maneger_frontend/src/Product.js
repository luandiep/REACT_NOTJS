export default function Product(props) {
    return(
       
        <div className="col-3">
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">{props.name}</p>
            </div>
          </div>
        </div>
        
  
    )
}