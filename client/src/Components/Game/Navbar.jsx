import React from 'react';
import { useRecoilState } from 'recoil';
import GameState from '../../State/GameState.jsx';

const Navbar = ({children}) => {
    const [Game, setGame] = useRecoilState(GameState);

    return (
        <>
        <nav className="p-4 border-b border-black">
            <div className="flex items-center justify-between">
                <div className="font-bold">Game Navbar</div>
                <div className="font-semibold">Current Month: {Game.monthNumber} / {Game.totalMonths}</div>
                <div className='flex items-center gap-6'>
                    <div className="font-semibold px-4 py-2 border-black border rounded-md">Balance: {Game.balance.toFixed(2)}</div>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='w-9'></img>
                </div>
            </div>
        </nav>
        {children}
        </>
    );
};

export default Navbar;
