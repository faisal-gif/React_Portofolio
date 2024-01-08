import React from 'react'
import '../css/client.css'


export const Client = () => {
    return (
        <section className="clientPage">
            <div className="clients">
                <h1 className="clientPageTitle">My Client</h1>
                <span className="clientDesc"></span>
                <div className="clientImgs">
                    <img src="/image-client/logokiansama.png" alt="" className="clientImg" />
                    <img src="/image-client/logo-stikeskarya.png" alt="" className="clientImg" />
                </div>
            </div>
        </section>
    )
}

export default Client;
