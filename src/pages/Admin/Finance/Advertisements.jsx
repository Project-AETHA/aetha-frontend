import TransactionTablePage from "../Transactions/Transactiontable"

export default function Advertisements() {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
        <h1 className="text-foreground-50 text-large bg-sky-500/75 rounded p-4 font-bold tracking-wide w-full flex justify-center">Advertisements</h1>
        <TransactionTablePage />
    </div>
  )
}