import { useState, useEffect } from 'react';

export const useReduce = (team) => {
    const [average, SetAverage] = useState({});

    useEffect(() => {
        const average = team.reduce((acc, obj) => {
            for (const key in obj.powerstats) {
                let value = Number(obj.powerstats[key]) || 0;
                acc[key] = Math.round((acc[key] || 0) + value / team.length);
            }
            for (const key in obj.appearance) {
                if (key === 'weight' || key === 'height') {
                    let value = obj.appearance[key][1].split(' ', 1);
                    acc[key] = Math.round((acc[key] || 0) + Number(value[0]) / team.length);
                }
            }
            return acc;
        }, {});

        SetAverage(average)       
    }, [team]);

    const totalAverage = Object.entries(average).filter(key => (
        key[0] !== 'weight' && key[0] !== 'height')
    );

    const otherDetails = Object.entries(average).filter(key => (
        key[0] !== 'strength' && key[0] !== 'speed' && key[0] !== 'durability' &&
        key[0] !== 'power' && key[0] !== 'combat' && key[0] !== 'intelligence')
    );
    
    totalAverage.sort((a,b) => b[1] - a[1]);

    return [totalAverage, otherDetails];
}
