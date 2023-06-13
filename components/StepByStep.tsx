export default function StepByStep() {
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-2xl mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Register as a tenant or a box owner.</li>
                <li>Box owners can list their available mailboxes.</li>
                <li>Tenants can search for available mailboxes and apply for one.</li>
                <li>Box owners approve tenants to use their mailboxes.</li>
            </ol>
        </section>
    )
}