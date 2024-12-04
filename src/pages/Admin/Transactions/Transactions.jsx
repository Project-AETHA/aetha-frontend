import React from 'react';

import { GrTransaction } from 'react-icons/gr';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import TransactionTable from './Transactiontable';



function Transactions() {
    return (
        <div className="p-4">
            
                    
            <div className='my-4'>
                <TransactionTable />
            </div>
        </div>
    );
}

export default Transactions;
