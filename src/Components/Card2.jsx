import React from "react"
class Card2 extends React.Component{
    constructor(){
        
        super();
        this.state ={
            total: null
        }
        // const jml = parseInt(this.props.jumlah)
        // const hrg = parseInt(this.props.harga)

        // var ttl = jml * hrg
        // this.setState({})
        
    }
    render(){
        return(
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        
                        <div className="col-7">
                            <h5 className="text-info">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                Harga: Rp.{this.props.harga}
                            </h6>
                            <h6 className="text-dark">
                                Jumlah: {this.props.jumlah} 
                               
                            </h6>
                            <h6 className="text-dark">
                                Total: Rp. {this.props.jumlah * this.props.harga}
                            </h6>

                            <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card2;
