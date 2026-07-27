// cert-pdf.js - PDF Certificate Generation for Guinea-Bissau

// Import html2pdf library (add this to your HTML)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function generateCertificate(studentData, documentType) {
    // studentData = {
    //   name: "João Silva",
    //   processNumber: "#2024-00124",
    //   school: "Escola Básica do Norte",
    //   region: "North Metropolitan",
    //   sector: "Setor A",
    //   year: "2024/2025",
    //   level: "1º Ano",
    //   average: "16.5",
    //   completionDate: "30/06/2025",
    //   subjects: [
    //     { name: "Português", grade: "16" },
    //     { name: "Matemática", grade: "17" },
    //     { name: "Estudo do Meio", grade: "15" }
    //   ]
    // }

    // Create the certificate HTML content
    const certificateHTML = `
        <div id="certificate-container" style="
            width: 800px;
            padding: 40px;
            margin: 0 auto;
            font-family: 'Times New Roman', serif;
            background: white;
            border: 10px double #1a1a1a;
            position: relative;
            min-height: 1100px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        ">
            <!-- Watermark -->
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.05;
                font-size: 120px;
                color: #1a1a1a;
                pointer-events: none;
                text-align: center;
                width: 100%;
            ">
                ${documentType === 'Diploma' ? 'DIPLOMA' : 'CERTIFICADO'}
            </div>

            <!-- Top Section: Emblem and Flag -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #1a1a1a; padding-bottom: 15px;">
                <div style="text-align: left;">
                    <!-- Guinea-Bissau Emblem - Text representation since we can't load images -->
                    <div style="
                        width: 80px;
                        height: 80px;
                        border: 3px solid #1a1a1a;
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: #f5f5f5;
                        font-size: 40px;
                        color: #1a1a1a;
                    ">
                        🌍
                    </div>
                    <div style="font-size: 10px; text-align: center; margin-top: 4px; font-weight: bold;">REPÚBLICA DA<br>GUINÉ-BISSAU</div>
                </div>
                
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 12px; font-weight: bold; letter-spacing: 2px; color: #1a1a1a;">MINISTÉRIO DA EDUCAÇÃO</div>
                    <div style="font-size: 10px; color: #555; margin-top: 2px;">Direção-Geral do Ensino</div>
                </div>
                
                <div style="text-align: right;">
                    <!-- Guinea-Bissau Flag - Text representation -->
                    <div style="
                        width: 80px;
                        height: 50px;
                        border: 2px solid #1a1a1a;
                        display: inline-block;
                        position: relative;
                    ">
                        <div style="
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            width: 25%;
                            background: #009e49;
                        "></div>
                        <div style="
                            position: absolute;
                            left: 25%;
                            top: 0;
                            right: 0;
                            height: 50%;
                            background: #fcec0c;
                        "></div>
                        <div style="
                            position: absolute;
                            left: 25%;
                            bottom: 0;
                            right: 0;
                            height: 50%;
                            background: #ce1126;
                        "></div>
                        <div style="
                            position: absolute;
                            left: 12%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 12px;
                            height: 12px;
                            background: #1a1a1a;
                            border-radius: 50%;
                        "></div>
                    </div>
                </div>
            </div>

            <!-- Title -->
            <div style="text-align: center; margin: 30px 0 20px;">
                <h1 style="
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: #1a1a1a;
                    margin: 0;
                ">${documentType}</h1>
                <div style="
                    width: 200px;
                    height: 3px;
                    background: #1a1a1a;
                    margin: 10px auto;
                "></div>
                <p style="
                    font-size: 14px;
                    color: #555;
                    margin: 5px 0 0;
                    font-style: italic;
                ">Documento Oficial de Autenticação</p>
            </div>

            <!-- Certificate Number -->
            <div style="text-align: right; margin-bottom: 20px; font-size: 12px; color: #666;">
                <strong>Nº:</strong> ${documentType === 'Diploma' ? 'DIP' : 'CER'}-${studentData.processNumber.replace('#', '')}
            </div>

            <!-- Main Content -->
            <div style="
                padding: 20px 30px;
                line-height: 2;
                font-size: 14px;
                text-align: justify;
            ">
                <p style="text-align: center; font-size: 16px; font-weight: bold; margin-bottom: 25px;">
                    CERTIFICA-SE PARA OS DEVIDOS EFEITOS LEGAIS QUE
                </p>

                <p style="text-align: center; font-size: 20px; font-weight: bold; margin: 20px 0; letter-spacing: 1px;">
                    ${studentData.name}
                </p>

                <p style="text-align: center; margin-bottom: 20px;">
                    <span style="font-size: 13px; color: #555;">Processo Nº ${studentData.processNumber}</span>
                </p>

                <p style="text-indent: 40px;">
                    Concluiu o <strong>${studentData.level}</strong> do <strong>${studentData.school}</strong>,
                    localizada na <strong>${studentData.region}</strong>, <strong>${studentData.sector}</strong>,
                    no ano letivo de <strong>${studentData.year}</strong>.
                </p>

                <p style="text-indent: 40px; margin-top: 15px;">
                    Obteve as seguintes classificações finais:
                </p>

                <!-- Grades Table -->
                <table style="
                    width: 80%;
                    margin: 15px auto;
                    border-collapse: collapse;
                    font-size: 13px;
                ">
                    <thead>
                        <tr style="background: #f0f0f0; border-bottom: 2px solid #1a1a1a;">
                            <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">Disciplina</th>
                            <th style="padding: 8px 12px; text-align: center; border: 1px solid #ddd;">Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${studentData.subjects.map(subject => `
                            <tr>
                                <td style="padding: 6px 12px; border: 1px solid #ddd;">${subject.name}</td>
                                <td style="padding: 6px 12px; text-align: center; border: 1px solid #ddd; font-weight: bold;">${subject.grade} valores</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <p style="text-align: center; margin: 15px 0;">
                    <strong>Média Final:</strong> <span style="font-size: 18px; color: #1a1a1a;">${studentData.average}</span> valores
                </p>

                <p style="text-indent: 40px; margin-top: 15px;">
                    Concluiu com aproveitamento todas as disciplinas do plano curricular,
                    tendo cumprido com as exigências do Ministério da Educação da República da Guiné-Bissau.
                </p>

                <p style="text-align: center; margin: 25px 0 15px;">
                    <strong>Data de Conclusão: ${studentData.completionDate}</strong>
                </p>
            </div>

            <!-- Signatures -->
            <div style="
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #1a1a1a;
                display: flex;
                justify-content: space-around;
                text-align: center;
            ">
                <div>
                    <div style="
                        width: 150px;
                        height: 1px;
                        background: #1a1a1a;
                        margin: 0 auto 8px;
                    "></div>
                    <p style="font-size: 12px; margin: 0;">
                        <strong>Diretor(a) da Escola</strong>
                    </p>
                    <p style="font-size: 10px; color: #666; margin: 2px 0 0;">
                        ${studentData.school}
                    </p>
                </div>
                <div>
                    <div style="
                        width: 150px;
                        height: 1px;
                        background: #1a1a1a;
                        margin: 0 auto 8px;
                    "></div>
                    <p style="font-size: 12px; margin: 0;">
                        <strong>Presidente do Conselho Pedagógico</strong>
                    </p>
                    <p style="font-size: 10px; color: #666; margin: 2px 0 0;">
                        ${studentData.school}
                    </p>
                </div>
            </div>

            <!-- Bottom Section -->
            <div style="
                margin-top: 30px;
                padding-top: 15px;
                border-top: 3px solid #1a1a1a;
                text-align: center;
                font-size: 10px;
                color: #666;
            ">
                <p style="margin: 0;">
                    Este documento é válido para todos os efeitos legais, nos termos da legislação em vigor.
                </p>
                <p style="margin: 2px 0 0;">
                    Autenticado pelo Ministério da Educação da República da Guiné-Bissau
                </p>
                <p style="margin: 2px 0 0; font-weight: bold; font-size: 9px; letter-spacing: 1px;">
                    ${documentType} AUTENTICADO • ${new Date().getFullYear()}
                </p>
            </div>

            <!-- QR Code placeholder -->
            <div style="
                position: absolute;
                bottom: 40px;
                right: 40px;
                width: 60px;
                height: 60px;
                border: 1px solid #ddd;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                color: #999;
            ">
                QR
            </div>
        </div>
    `;

    // Create a temporary container
    const container = document.createElement('div');
    container.innerHTML = certificateHTML;
    document.body.appendChild(container);

    // Generate PDF
    const element = document.getElementById('certificate-container');
    const opt = {
        margin: 0,
        filename: `${documentType}_${studentData.name.replace(/\s+/g, '_')}_${studentData.processNumber.replace('#', '')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        // Remove temporary container
        document.body.removeChild(container);
    });
}

// Function to generate both Diploma and Certificado for a student
function generateBothDocuments(studentData) {
    // Generate Diploma
    generateCertificate(studentData, 'Diploma');
    
    // Generate Certificado (with slightly different wording)
    setTimeout(() => {
        generateCertificate(studentData, 'Certificado');
    }, 1000);
}

// Example usage:
// generateBothDocuments(studentData);