// Load all components when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load Sidebar
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            initNavigation();
        })
        .catch(error => console.error('Error loading sidebar:', error));
    
    // Load TopNav
    fetch('components/topnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('topnav-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading topnav:', error));
    
    // Load Dashboard Content
    fetch('dashboard.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dashboard-content').innerHTML = data;
            // Load sections AFTER dashboard is inserted into DOM
            loadDashboardSections();
        })
        .catch(error => console.error('Error loading dashboard:', error));

        if (document.getElementById('cycles-content')) {
            loadCyclesContent();
        }
});

// Load dashboard sections
function loadDashboardSections() {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
        // Load Stats
        fetch('sections/stats.html')
            .then(response => response.text())
            .then(data => {
                const statsContainer = document.getElementById('stats-container');
                if (statsContainer) {
                    statsContainer.innerHTML = data;
                } else {
                    console.error('Stats container not found');
                }
            })
            .catch(error => console.error('Error loading stats:', error));
        
        // Load Hierarchy
        fetch('sections/hierarchy.html')
            .then(response => response.text())
            .then(data => {
                const hierarchyContainer = document.getElementById('hierarchy-container');
                if (hierarchyContainer) {
                    hierarchyContainer.innerHTML = data;
                } else {
                    console.error('Hierarchy container not found');
                }
            })
            .catch(error => console.error('Error loading hierarchy:', error));
        
        // Load Student Table
        fetch('sections/student-table.html')
            .then(response => response.text())
            .then(data => {
                const tableContainer = document.getElementById('student-table-container');
                if (tableContainer) {
                    tableContainer.innerHTML = data;
                } else {
                    console.error('Student table container not found');
                }
            })
            .catch(error => console.error('Error loading student table:', error));
    }, 100); // Small delay
}

function loadCyclesContent() {
    const cyclesContent = document.getElementById('cycles-content');
    if (!cyclesContent) return;
    
    // Load Cycles Header
    fetch('sections/cycles-header.html')
        .then(response => response.text())
        .then(data => {
            cyclesContent.innerHTML = data;
            // After header loads, load stats
            loadCyclesStats();
        })
        .catch(error => console.error('Error loading cycles header:', error));
}

// Load Cycles Stats
function loadCyclesStats() {
    fetch('sections/cycles-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('cycles-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            // After stats loads, load table
            loadCyclesTable();
        })
        .catch(error => console.error('Error loading cycles stats:', error));
}

// Load Cycles Table
function loadCyclesTable() {
    fetch('sections/cycles-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('cycles-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
                initTableSearch();
            }
            // After table loads, load tips
            loadCyclesTips();
        })
        .catch(error => console.error('Error loading cycles table:', error));
}

// Load Cycles Tips
function loadCyclesTips() {
    fetch('sections/cycles-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('cycles-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading cycles tips:', error));
}

// Initialize table search
function initTableSearch() {
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }
}

// Navigation interaction
/*function initNavigation() {
    setTimeout(() => {
        const navLinks = document.querySelectorAll('nav a');
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (!this.classList.contains('bg-primary-container')) {
                        document.querySelectorAll('nav a').forEach(l => {
                            l.classList.remove('bg-primary-container', 'text-on-primary-fixed-variant', 'border-l-4', 'border-primary');
                            l.classList.add('text-secondary');
                        });
                        this.classList.add('bg-primary-container', 'text-on-primary-fixed-variant', 'border-l-4', 'border-primary');
                        this.classList.remove('text-secondary');
                    }
                });
            });
        }
    }, 200);
}*/

// Load Setor Content
function loadSetorContent() {
    // Load Setor Header
    fetch('sections/setor-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('setor-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            // After header loads, load stats
            loadSetorStats();
        })
        .catch(error => console.error('Error loading setor header:', error));
}

// Load Setor Stats
function loadSetorStats() {
    fetch('sections/setor-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('setor-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            // After stats loads, load table
            loadSetorTable();
        })
        .catch(error => console.error('Error loading setor stats:', error));
}

// Load Setor Table
function loadSetorTable() {
    fetch('sections/setor-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('setor-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            // After table loads, load tips
            loadSetorTips();
        })
        .catch(error => console.error('Error loading setor table:', error));
}

// Load Setor Tips
function loadSetorTips() {
    fetch('sections/setor-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('setor-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading setor tips:', error));
}

// Load Escola Content
function loadEscolaContent() {
    // Load Escola Header
    fetch('sections/escola-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('escola-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadEscolaStats();
        })
        .catch(error => console.error('Error loading escola header:', error));
}

// Load Escola Stats
function loadEscolaStats() {
    fetch('sections/escola-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('escola-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadEscolaTable();
        })
        .catch(error => console.error('Error loading escola stats:', error));
}

// Load Escola Table
function loadEscolaTable() {
    fetch('sections/escola-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('escola-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadEscolaTips();
        })
        .catch(error => console.error('Error loading escola table:', error));
}

// Load Escola Tips
function loadEscolaTips() {
    fetch('sections/escola-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('escola-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading escola tips:', error));
}

// Load Nível de Ensino Content
function loadNivelEnsinoContent() {
    // Load Nível de Ensino Header
    fetch('sections/nivel-ensino-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('nivel-ensino-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadNivelEnsinoStats();
        })
        .catch(error => console.error('Error loading nivel ensino header:', error));
}

// Load Nível de Ensino Stats
function loadNivelEnsinoStats() {
    fetch('sections/nivel-ensino-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('nivel-ensino-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadNivelEnsinoTable();
        })
        .catch(error => console.error('Error loading nivel ensino stats:', error));
}

// Load Nível de Ensino Table
function loadNivelEnsinoTable() {
    fetch('sections/nivel-ensino-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('nivel-ensino-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadNivelEnsinoTips();
        })
        .catch(error => console.error('Error loading nivel ensino table:', error));
}

// Load Nível de Ensino Tips
function loadNivelEnsinoTips() {
    fetch('sections/nivel-ensino-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('nivel-ensino-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading nivel ensino tips:', error));
}

// Load Ciclos Content
function loadCiclosContent() {
    // Load Ciclos Header
    fetch('sections/ciclos-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('ciclos-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadCiclosStats();
        })
        .catch(error => console.error('Error loading ciclos header:', error));
}

// Load Ciclos Stats
function loadCiclosStats() {
    fetch('sections/ciclos-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('ciclos-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadCiclosTable();
        })
        .catch(error => console.error('Error loading ciclos stats:', error));
}

// Load Ciclos Table
function loadCiclosTable() {
    fetch('sections/ciclos-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('ciclos-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadCiclosTips();
        })
        .catch(error => console.error('Error loading ciclos table:', error));
}

// Load Ciclos Tips
function loadCiclosTips() {
    fetch('sections/ciclos-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('ciclos-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading ciclos tips:', error));
}

// Load Nível de Escolaridade Content
function loadNivelEscolaridadeContent() {
    // Load Nível de Escolaridade Header
    fetch('sections/nivel-escolaridade-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('nivel-escolaridade-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadNivelEscolaridadeStats();
        })
        .catch(error => console.error('Error loading nivel escolaridade header:', error));
}

// Load Nível de Escolaridade Stats
function loadNivelEscolaridadeStats() {
    fetch('sections/nivel-escolaridade-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('nivel-escolaridade-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadNivelEscolaridadeTable();
        })
        .catch(error => console.error('Error loading nivel escolaridade stats:', error));
}

// Load Nível de Escolaridade Table
function loadNivelEscolaridadeTable() {
    fetch('sections/nivel-escolaridade-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('nivel-escolaridade-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadNivelEscolaridadeTips();
        })
        .catch(error => console.error('Error loading nivel escolaridade table:', error));
}

// Load Nível de Escolaridade Tips
function loadNivelEscolaridadeTips() {
    fetch('sections/nivel-escolaridade-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('nivel-escolaridade-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading nivel escolaridade tips:', error));
}

// Load Turma Content
function loadTurmaContent() {
    // Load Turma Header
    fetch('sections/turma-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('turma-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadTurmaStats();
        })
        .catch(error => console.error('Error loading turma header:', error));
}

// Load Turma Stats
function loadTurmaStats() {
    fetch('sections/turma-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('turma-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadTurmaTable();
        })
        .catch(error => console.error('Error loading turma stats:', error));
}

// Load Turma Table
function loadTurmaTable() {
    fetch('sections/turma-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('turma-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadTurmaTips();
        })
        .catch(error => console.error('Error loading turma table:', error));
}

// Load Turma Tips
function loadTurmaTips() {
    fetch('sections/turma-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('turma-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading turma tips:', error));
}

// Load Plano Curricular Content
function loadPlanoCurricularContent() {
    // Load Plano Curricular Header
    fetch('sections/plano-curricular-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('plano-curricular-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadPlanoCurricularStats();
        })
        .catch(error => console.error('Error loading plano curricular header:', error));
}

// Load Plano Curricular Stats
function loadPlanoCurricularStats() {
    fetch('sections/plano-curricular-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('plano-curricular-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadPlanoCurricularTable();
        })
        .catch(error => console.error('Error loading plano curricular stats:', error));
}

// Load Plano Curricular Table
function loadPlanoCurricularTable() {
    fetch('sections/plano-curricular-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('plano-curricular-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadPlanoCurricularTips();
        })
        .catch(error => console.error('Error loading plano curricular table:', error));
}

// Load Plano Curricular Tips
function loadPlanoCurricularTips() {
    fetch('sections/plano-curricular-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('plano-curricular-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading plano curricular tips:', error));
}

// Load Ano Letivo Content
function loadAnoLetivoContent() {
    // Load Ano Letivo Header
    fetch('sections/ano-letivo-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('ano-letivo-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadAnoLetivoStats();
        })
        .catch(error => console.error('Error loading ano letivo header:', error));
}

// Load Ano Letivo Stats
function loadAnoLetivoStats() {
    fetch('sections/ano-letivo-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('ano-letivo-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadAnoLetivoTable();
        })
        .catch(error => console.error('Error loading ano letivo stats:', error));
}

// Load Ano Letivo Table
function loadAnoLetivoTable() {
    fetch('sections/ano-letivo-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('ano-letivo-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadAnoLetivoTips();
        })
        .catch(error => console.error('Error loading ano letivo table:', error));
}

// Load Ano Letivo Tips
function loadAnoLetivoTips() {
    fetch('sections/ano-letivo-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('ano-letivo-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading ano letivo tips:', error));
}

// Load Aluno Content
function loadAlunoContent() {
    // Load Aluno Header
    fetch('sections/aluno-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('aluno-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadAlunoStats();
        })
        .catch(error => console.error('Error loading aluno header:', error));
}

// Load Aluno Stats
function loadAlunoStats() {
    fetch('sections/aluno-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('aluno-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadAlunoTable();
        })
        .catch(error => console.error('Error loading aluno stats:', error));
}

// Load Aluno Table
function loadAlunoTable() {
    fetch('sections/aluno-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('aluno-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadAlunoTips();
        })
        .catch(error => console.error('Error loading aluno table:', error));
}

// Load Aluno Tips
function loadAlunoTips() {
    fetch('sections/aluno-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('aluno-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading aluno tips:', error));
}

// Load Livro Content
function loadLivroContent() {
    // Load Livro Header
    fetch('sections/livro-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('livro-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadLivroStats();
        })
        .catch(error => console.error('Error loading livro header:', error));
}

// Load Livro Stats
function loadLivroStats() {
    fetch('sections/livro-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('livro-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadLivroTable();
        })
        .catch(error => console.error('Error loading livro stats:', error));
}

// Load Livro Table
function loadLivroTable() {
    fetch('sections/livro-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('livro-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadLivroTips();
        })
        .catch(error => console.error('Error loading livro table:', error));
}

// Load Livro Tips
function loadLivroTips() {
    fetch('sections/livro-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('livro-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading livro tips:', error));
}

// Load Folha Content
function loadFolhaContent() {
    // Load Folha Header
    fetch('sections/folha-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('folha-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadFolhaStats();
        })
        .catch(error => console.error('Error loading folha header:', error));
}

// Load Folha Stats
function loadFolhaStats() {
    fetch('sections/folha-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('folha-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadFolhaTable();
        })
        .catch(error => console.error('Error loading folha stats:', error));
}

// Load Folha Table
function loadFolhaTable() {
    fetch('sections/folha-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('folha-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadFolhaTips();
        })
        .catch(error => console.error('Error loading folha table:', error));
}

// Load Folha Tips
function loadFolhaTips() {
    fetch('sections/folha-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('folha-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading folha tips:', error));
}

// Load Tipo Documento Content
function loadTipoDocumentoContent() {
    // Load Tipo Documento Header
    fetch('sections/tipo-documento-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('tipo-documento-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadTipoDocumentoStats();
        })
        .catch(error => console.error('Error loading tipo documento header:', error));
}

// Load Tipo Documento Stats
function loadTipoDocumentoStats() {
    fetch('sections/tipo-documento-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('tipo-documento-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadTipoDocumentoTable();
        })
        .catch(error => console.error('Error loading tipo documento stats:', error));
}

// Load Tipo Documento Table
function loadTipoDocumentoTable() {
    fetch('sections/tipo-documento-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('tipo-documento-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadTipoDocumentoTips();
        })
        .catch(error => console.error('Error loading tipo documento table:', error));
}

// Load Tipo Documento Tips
function loadTipoDocumentoTips() {
    fetch('sections/tipo-documento-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('tipo-documento-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading tipo documento tips:', error));
}

// Load Região Content
function loadRegiaoContent() {
    // Load Região Header
    fetch('sections/regiao-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('regiao-header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
            loadRegiaoStats();
        })
        .catch(error => console.error('Error loading regiao header:', error));
}

// Load Região Stats
function loadRegiaoStats() {
    fetch('sections/regiao-stats.html')
        .then(response => response.text())
        .then(data => {
            const statsContainer = document.getElementById('regiao-stats-container');
            if (statsContainer) {
                statsContainer.innerHTML = data;
            }
            loadRegiaoTable();
        })
        .catch(error => console.error('Error loading regiao stats:', error));
}

// Load Região Table
function loadRegiaoTable() {
    fetch('sections/regiao-table.html')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('regiao-table-container');
            if (tableContainer) {
                tableContainer.innerHTML = data;
            }
            loadRegiaoTips();
        })
        .catch(error => console.error('Error loading regiao table:', error));
}

// Load Região Tips
function loadRegiaoTips() {
    fetch('sections/regiao-tips.html')
        .then(response => response.text())
        .then(data => {
            const tipsContainer = document.getElementById('regiao-tips-container');
            if (tipsContainer) {
                tipsContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading regiao tips:', error));
}

// Navigation interaction
/*function initNavigation() {
    setTimeout(() => {
        const navLinks = document.querySelectorAll('nav a');
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (!this.classList.contains('bg-primary-container')) {
                        document.querySelectorAll('nav a').forEach(l => {
                            // REMOVE old classes
                            l.classList.remove('nav-link-active', 'text-on-primary-fixed-variant', 'border-l-4', 'border-primary');
                            // ADD these instead of 'text-secondary'
                            l.classList.add('text-white/70');
                        });
                        // ADD purple classes instead
                        this.classList.add('nav-link-active');
                        this.classList.remove('text-white/70');
                    }
                });
            });
        }
    }, 200);
}*/

function initNavigation() {
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        const dashboardLink = document.querySelector('a[href*="index.html"]');
        
        if (navLinks.length > 0) {
            // Check current page and set active link
            const currentPath = window.location.pathname;
            
            navLinks.forEach(link => {
                // Remove all active classes first
                link.classList.remove('is-active');
                
                // Remove the gradient background style
                if (link.style.background) {
                    link.style.background = '';
                }
                
                // Check if this link matches current page
                const href = link.getAttribute('href');
                if (href && currentPath.includes(href.replace(/^\.\//, ''))) {
                    // For the current page, add active class
                    link.classList.add('is-active');
                    
                    // Apply the gradient background
                    link.style.background = 'radial-gradient(circle at 10% 20%, rgb(186, 190, 245) 0%, rgb(192, 192, 245) 33.1%, rgb(218, 203, 246) 90%)';
                    
                    // Change text color to navy
                    link.style.color = '#1a1a4e';
                    
                    // Remove white/70 text color
                    link.classList.remove('text-white/70');
                    link.classList.add('text-navy');
                }
            });
            
            // Add click event listeners
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Don't prevent default for actual navigation
                    // Just handle the active state styling
                    
                    // Remove active from all
                    navLinks.forEach(l => {
                        l.classList.remove('is-active');
                        if (l.style.background) {
                            l.style.background = '';
                        }
                        if (l.style.color) {
                            l.style.color = '';
                        }
                        l.classList.add('text-white/70');
                        l.classList.remove('text-navy');
                    });
                    
                    // Add active to clicked
                    this.classList.add('is-active');
                    this.style.background = 'radial-gradient(circle at 10% 20%, rgb(186, 190, 245) 0%, rgb(192, 192, 245) 33.1%, rgb(218, 203, 246) 90%)';
                    this.style.color = '#1a1a4e';
                    this.classList.remove('text-white/70');
                    this.classList.add('text-navy');
                });
            });
        }
    }, 30);
}