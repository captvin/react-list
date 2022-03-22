import React, {Component} from 'react';
import $ from 'jquery';
import Card from '../Components/Card';

class Agenda extends Component {
    constructor(){
        super()
        this.state = {
            agenda:[
                {
                    nama: "Reboisasi", tanggal: "2022-04-12"
                },
                {
                    nama: "Hias Taman", tanggal: "2022-04-13"
                },
                {
                    nama: "Jalan Sehat", tanggal: "2022-04-14"
                },
                {
                    nama: "Acara Utama", tanggal: "2022-04-15"
                },

            ],

            action:"",
            nama:"",
            tanggal: "",
            selectedItem: null,
        }
        this.state.filterAgenda = this.state.agenda
    }

    render(){
        return(
            <div className='container'>
                <input type="text" className='form-contro; my-2' placeholder='Pencarian' value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <div className='row'>
                    {this.state.filterAgenda.map((item, index) => (
                        <Card nama={item.nama} tanggal={item.tanggal} onEdit={() => this.Edit(item)} onDrop={() => this.Drop(item)}/>
                    ))}
                </div>
                <button className='btn btn-success' onClick={() => this.Add()}>
                    Tambah data
                </button>
                <div className="modal" id="modal_agenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />
                                    Tanggal

                                    <input type="date" className="form-control mb-2"

                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({
                                            tanggal
                                                : ev.target.value
                                        })}
                                        required />
                                    
                                    

                                    <button className="btn btn-info btn-block" type="submit">

                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_agenda").show()
        this.setState({
            nama: "",
            tanggal: "",
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_agenda").show()
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state agenda
        let tempAgenda = this.state.agenda
        if (this.state.action === "insert") {
            // menambah data baru
            tempAgenda.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal
            })

        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].nama = this.state.nama
            tempAgenda[index].tanggal = this.state.tanggal
        }
        this.setState({ agenda: tempAgenda })
        // menutup komponen modal_agenda
        $("#modal_agenda").hide()
    }
   
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempAgenda = this.state.agenda
            // posisi index data yg akan dihapus
            let index = tempAgenda.indexOf(item)
            // hapus data
            tempAgenda.splice(index, 1)
            this.setState({ keranjang: tempAgenda })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            let keyword = this.state.keyword.toLowerCase()
            let tempAgenda = this.state.agenda
            let result = tempAgenda.filter(item => {
                return item.nama.toLowerCase().includes(keyword) 
            })
            this.setState({ filterAgenda: result })
        }
    }
}

export default Agenda;