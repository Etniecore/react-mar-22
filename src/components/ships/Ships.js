import {useEffect, useState} from "react";
import Ship from "../ship/Ship";

export default function Ships() {

    let [ships, setShips] = useState([]);

    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches')
                .then(respone => respone.json())
                .then(data => {
                    setShips(data);
                })
        }
        , [])

    return (
        <div>
            {ships.filter(ship => ship.launch_year !== "2020")
                .map((ship, index) => {
                        return (
                            <Ship
                                key={index}
                                mission={ship.mission_name}
                                year={ship.launch_year}
                                picture={ship.links.mission_patch_small}
                            />
                        )

                    }
                )
            }
        </div>
    )
}
