
            const ports = [21, 22, 80, 443, 8080];
            const grid = document.getElementById('scan-grid');
            
            window.startScan = function() {
                grid.innerHTML = '';
                ports.forEach(port => {
                    const node = document.createElement('div');
                    node.className = 'port-node';
                    node.innerHTML = `<div>Port ${port}</div><div style="color:yellow; font-size:12px; margin-top:4px;">Scanning...</div>`;
                    grid.appendChild(node);
                    setTimeout(() => {
                        const status = Math.random() < 0.4 ? "<span style='color:#39ff14;'>OPEN</span>" : "<span style='color:red;'>FILTERED</span>";
                        node.innerHTML = `<div>Port ${port}</div><div style="font-size:12px; margin-top:4px; font-weight:bold;">${status}</div>`;
                    }, 500 + Math.random()*1000);
                });
            }
            startScan();
        