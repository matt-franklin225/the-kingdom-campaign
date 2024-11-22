import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '..';
import { useParams } from 'react-router-dom';
import { npcs } from './data/npcs';
import './npc_detail.css'

function NpcDetail() {
    const { loc } = useParams();
    const npc = npcs.find((char) => char.loc === loc);

    if (!npc) {
        return <h2>Npc not found</h2>;
    }

    return (
        
        <div className="npc_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="npc_detail-info section__padding">
                    <div className="npc_detail-info-heading">
                        <div className="npc_detail-name">
                            <h1>{npc.name}</h1>
                        </div>
                        <div className="npc_detail-image">
                            <img src={npc.imgUrl} alt={npc.name}/>
                        </div>
                    </div>
                    <div className="npc_detail-info-details">
                        <div className="npc_detail-trait">
                            <h2>{'Class:'}</h2>
                        </div>
                        <div className="npc_detail-value">
                            <h3>{npc.class}</h3>
                        </div>
                        <div className="npc_detail-trait">
                            <h2>{'Race:'}</h2>
                        </div>
                        <div className="npc_detail-value">
                            <h3>{npc.race}</h3>
                        </div>
                    </div>
                </div>
                <div className="npc_detail-description">
                    <h1>Description</h1>
                    <div className="npc_detail-description-text">
                        <h3>{npc.description}</h3>
                    </div>
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default NpcDetail;
