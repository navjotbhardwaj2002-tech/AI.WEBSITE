// Tab switching functionality
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// AI Script Writer
async function generateScript() {
    const topic = document.getElementById('scriptTopic').value;
    const length = document.getElementById('scriptLength').value;
    const resultDiv = document.getElementById('scriptResult');
    
    resultDiv.innerHTML = '<div class="loading">Generating script...</div>';
    
    try {
        // Simulate AI script generation (in real implementation, you'd call an API)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const scripts = {
            short: `🎯 Quick ${topic} Guide:\n\n1️⃣ Start with research\n2️⃣ Create engaging content\n3️⃣ Optimize for engagement\n4️⃣ Post consistently\n5️⃣ Analyze results\n\nRemember: Quality over quantity! 💪`,
            
            medium: `📺 ${topic} - Complete Guide:\n\nINTRO: "Are you struggling with ${topic}? Today I'll show you the exact steps to succeed!"\n\nSTEP 1: Research Your Topic\n- Use trending hashtags\n- Check competitors\n- Find your unique angle\n\nSTEP 2: Create Content\n- Hook viewers in first 3 seconds\n- Use storytelling\n- Add value every second\n\nSTEP 3: Optimize & Post\n- Best posting times\n- Engaging thumbnails\n- Strong call-to-action\n\nCONCLUSION: "Follow these steps and you'll see results in just 30 days! Don't forget to like and subscribe!"`,
            
            long: `🎬 Ultimate ${topic} Mastery Guide:\n\nINTRO: "In this video, I'll reveal the secrets that top creators use to master ${topic}. These strategies helped me grow from 0 to 100K followers!"\n\nSECTION 1: Foundation (Minutes 0-1)\n- Understanding your audience\n- Setting realistic goals\n- Choosing the right platform\n\nSECTION 2: Content Creation (Minutes 1-2.5)\n- Content planning strategies\n- Tools and resources\n- Consistency techniques\n\nSECTION 3: Growth Hacks (Minutes 2.5-4)\n- Algorithm optimization\n- Engagement boosters\n- Collaboration tips\n\nSECTION 4: Monetization (Minutes 4-5)\n- Revenue streams\n- Brand partnerships\n- Scaling strategies\n\nOUTRO: "Implement these strategies and tag me in your success stories!"`
        };
        
        resultDiv.innerHTML = `
            <h4>✅ Script Generated Successfully!</h4>
            <pre style="white-space: pre-wrap; font-family: inherit; line-height: 1.5;">${scripts[length]}</pre>
            <button onclick="copyToClipboard('${scripts[length].replace(/'/g, "\\'")}')" class="btn-primary" style="margin-top: 10px;">
                📋 Copy Script
            </button>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Error generating script: ${error.message}</
