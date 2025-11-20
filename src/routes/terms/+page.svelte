<svelte:head>
    <title>Terms & Conditions | AHMZ Agency</title>
</svelte:head>

<section class="section">
    <div class="container">
        <h1>TERMS & CONDITIONS</h1>
        <div class="legal-text">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. INTRODUCTION</h2>
            <p>
                Welcome to AHMZ Agency B.V. By accessing our website and using our services, you agree to be bound by these Terms and Conditions.
            </p>

            <h2>2. SERVICES</h2>
            <p>
                AHMZ Agency provides managed services in software development, design, and consultation. We engage third-party specialists to execute the work under our supervision.
            </p>

            <h2>3. PAYMENTS</h2>
            <p>
                All payments are processed through AHMZ Agency B.V. Clients are invoiced directly by us. We are responsible for paying our network of specialists.
            </p>

            <h2>4. INTELLECTUAL PROPERTY</h2>
            <p>
                Upon full payment, all intellectual property rights for the delivered work are transferred to the client, unless otherwise specified in the project agreement.
            </p>

            <h2>5. LIABILITY</h2>
            <p>
                AHMZ Agency B.V. is liable for the quality of work delivered, subject to the limitations defined in individual service contracts.
            </p>

            <h2>6. REFUND & CANCELLATION POLICY</h2>
            <p>
                <strong>Cancellations:</strong> Clients may cancel a project with 7 days' written notice. Work completed up to the cancellation date will be billed.
                <br><br>
                <strong>Refunds:</strong> Due to the nature of our services, refunds are not issued for completed milestones or time spent. If a project is cancelled before work begins, a full refund of any deposit will be issued within 14 days.
            </p>

            <h2>7. DELIVERY TERMS</h2>
            <p>
                <strong>Digital Delivery:</strong> All deliverables (code, designs, documents) are delivered digitally via email, secure file transfer, or version control repositories (e.g., GitHub).
                <br><br>
                <strong>Timeline:</strong> Delivery timelines are specified in the individual project agreement. We strive to meet all deadlines and will communicate any potential delays immediately.
            </p>
            <h2>8. PRICING & CURRENCY</h2>
            <p>
                All prices are quoted in Euros (€/EUR). All transactions are processed in Euros.
            </p>

            <h2>9. PAYMENT METHODS</h2>
            <p>
                We accept payments via iDEAL, Credit Card (Visa, Mastercard), and Bank Transfer. Payments are securely processed by our payment provider, Mollie.
            </p>
        </div>
    </div>
</section>

<style>
    .legal-text {
        max-width: 800px;
        font-family: monospace;
    }

    h2 {
        margin-top: 2rem;
        border-bottom: 1px solid var(--text-color);
    }
</style>
