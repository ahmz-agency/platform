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
