import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    # Setup document with standard 0.5 inch margins (36 pt)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom colors
    primary_color = colors.HexColor("#0f172a") # Slate 900
    subheading_color = colors.HexColor("#1e293b")
    text_color = colors.HexColor("#334155") # Slate 700
    link_color = colors.HexColor("#1d4ed8") # Blue 700
    line_color = colors.HexColor("#3b82f6") # Blue 500
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        textColor=primary_color,
        spaceAfter=3
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#2563eb"),
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=text_color,
        spaceAfter=8
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=primary_color,
        spaceBefore=7,
        spaceAfter=2
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_color,
        spaceAfter=3
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )
    
    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=primary_color
    )
    
    story = []
    
    # 1. Header
    story.append(Paragraph("AVINASH BASUTKAR", title_style))
    story.append(Paragraph("Aspiring Data Analyst | Data Scientist", subtitle_style))
    contact_text = (
        'avinashbasutkar29@gmail.com &nbsp;|&nbsp; +91 7259999521 &nbsp;|&nbsp; Bangalore, India &nbsp;|&nbsp; '
        '<a href="https://linkedin.com/in/avinash-basutkar-061b3b279"><font color="#1d4ed8"><u>linkedin.com/in/avinash-basutkar-061b3b279</u></font></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/avibasutkar"><font color="#1d4ed8"><u>github.com/avibasutkar</u></font></a> &nbsp;|&nbsp; '
        '<a href="https://avifolio.vercel.app/"><font color="#1d4ed8"><u>avifolio.vercel.app</u></font></a>'
    )
    story.append(Paragraph(contact_text, contact_style))
    
    # Helper for section dividers
    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=1, color=line_color, spaceAfter=4, spaceBefore=1))
        
    # 2. Summary
    add_section_header("Summary")
    story.append(Paragraph(
        "Computer Science and Engineering graduate with skills in SQL, Excel, Python, and Data Analysis. "
        "Hands-on experience in data preprocessing, reporting, dashboard development, and analytical problem-solving through internship and academic projects. "
        "Strong communication and teamwork abilities with a keen interest in Fraud Risk Analysis, Data Investigation, and data-driven decision-making.",
        body_style
    ))
    
    # 3. Technical Skills
    add_section_header("Technical Skills")
    skills_data = [
        [Paragraph("<b>Languages/Tools:</b>", body_style), Paragraph("Python, SQL, Excel", body_style)],
        [Paragraph("<b>Data Science & ML:</b>", body_style), Paragraph("Machine Learning, Data Science, Predictive Modeling", body_style)],
        [Paragraph("<b>Visualization:</b>", body_style), Paragraph("Power BI", body_style)],
        [Paragraph("<b>Databases:</b>", body_style), Paragraph("MySQL", body_style)],
        [Paragraph("<b>Core:</b>", body_style), Paragraph("Data Analytics, Data Preprocessing, Dashboard Development", body_style)],
    ]
    t = Table(skills_data, colWidths=[110, 430])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    
    # 4. Education
    add_section_header("Education")
    edu_header = [
        [
            Paragraph("<b>B.E. in Computer Science and Engineering</b>", item_title),
            Paragraph("<b>Graduated 2026</b>", ParagraphStyle('R', parent=item_title, alignment=TA_RIGHT))
        ]
    ]
    t_edu = Table(edu_header, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Paragraph("C Byregowda Institute of Technology, Bangalore &nbsp;|&nbsp; <b>[CGPA : 8.1]</b> &nbsp;|&nbsp; Relevant coursework: DBMS, Statistics, Machine Learning, Data Structures", body_style))
    
    # 5. Experience
    add_section_header("Experience")
    exp_header = [
        [
            Paragraph("<b>Data Science Intern</b> — <i>Qspiders</i>", item_title),
            Paragraph("<b>Jan 2026 – Present</b>", ParagraphStyle('R', parent=item_title, alignment=TA_RIGHT))
        ]
    ]
    t_exp = Table(exp_header, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_exp)
    story.append(Paragraph("• &nbsp; Performed data preprocessing and cleaning on real-world datasets using Python and SQL to prepare them for analysis.", bullet_style))
    story.append(Paragraph("• &nbsp; Built reports and interactive dashboards to support analytical problem-solving and data-driven decisions.", bullet_style))
    
    # 6. Projects
    add_section_header("Projects")
    
    projects = [
        {
            "title": "Analysis Agent",
            "tech": "React, TypeScript, Express, Google Gemini API",
            "link": "github.com/avibasutkar/analysis-agent",
            "url": "https://github.com/avibasutkar/analysis-agent",
            "bullets": [
                "Built a full-stack AI Data Analyst Agent that automatically analyzes uploaded CSV datasets and performs Exploratory Data Analysis (EDA).",
                "Generated visual dashboards and an AI-powered natural language chat interface to let users interrogate their data conversationally."
            ]
        },
        {
            "title": "Enterprise Analyst Platform",
            "tech": "Python, Streamlit, Machine Learning, Explainable AI",
            "link": "github.com/avibasutkar/enterprice-analyst-platform",
            "url": "https://github.com/avibasutkar/enterprice-analyst-platform",
            "bullets": [
                "Developed an end-to-end AI/ML web app that runs data validation, EDA, multi-model training, and evaluation on any uploaded CSV/Excel dataset.",
                "Added explainable AI, AI-generated insights, a natural-language chat interface, and downloadable PDF reporting in a single Streamlit dashboard."
            ]
        },
        {
            "title": "HR Analysis Dashboard",
            "tech": "SQL, Python, Power BI, Machine Learning",
            "link": "github.com/avibasutkar/HR-analysis-Dashboard",
            "url": "https://github.com/avibasutkar/HR-analysis-Dashboard",
            "bullets": [
                "Analyzed employee attrition trends to identify key factors driving turnover, combining SQL, Python, and Power BI.",
                "Delivered actionable insights and a Power BI dashboard to help HR teams improve retention strategies."
            ]
        },
        {
            "title": "Automatic Question Generator",
            "tech": "Python, NLP, AI",
            "link": "github.com/avibasutkar/Automatic-Question-Generator",
            "url": "https://github.com/avibasutkar/Automatic-Question-Generator",
            "bullets": [
                "Built an AI-powered tool that automatically generates meaningful practice questions from notes, PDFs, or text content.",
                "Designed to help students and educators speed up exam preparation and study material creation."
            ]
        },
        {
            "title": "AI Pixel Counter",
            "tech": "Python, Computer Vision, Image Processing",
            "link": "github.com/avibasutkar/ai-pixcel-counter",
            "url": "https://github.com/avibasutkar/ai-pixcel-counter",
            "bullets": [
                "Developed a computer vision application that detects, classifies, and counts pixels by color, object boundary, or selected region.",
                "Applied image processing and AI techniques to enable efficient, automated image analysis."
            ]
        }
    ]
    
    for proj in projects:
        p_row = [
            [
                Paragraph(f"<b>{proj['title']}</b> &nbsp;|&nbsp; <i>{proj['tech']}</i>", item_title),
                Paragraph(f'<a href="{proj["url"]}"><font color="#1d4ed8"><u>{proj["link"]}</u></font></a>', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT, fontSize=8))
            ]
        ]
        t_proj = Table(p_row, colWidths=[370, 170])
        t_proj.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('PADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ]))
        story.append(t_proj)
        for b in proj['bullets']:
            story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
            
    # 7. Certifications
    add_section_header("Certifications")
    certs = [
        "<b>Fullstack Web Development</b> — Tap Academy (2024): Core & Advanced Java, Spring, Hibernate, MySQL, and frontend development, applied in a capstone Online Food Delivery app.",
        "<b>AI & Data Science Hackfest</b> — UnStop (2025): 24-hour hackathon at C Byregowda Institute of Technology, Kolar.",
        "<b>AI Tools & ChatGPT Workshop</b> — Be10X (2026): 12-hour hands-on workshop led by an IIT Delhi trainer on ChatGPT and AI tools.",
        "<b>Claude AI</b> — GUVI HCL (2025): Prompt engineering and building real-time projects with AI.",
        "<b>Gen AI in AIML</b> — GUVI HCL (2026): Webinar on building AI & Machine Learning projects.",
        "<b>Data Analyst intern</b> – Issued from NoveTech"
    ]
    for c in certs:
        story.append(Paragraph(f"• &nbsp; {c}", bullet_style))
        
    # 8. Languages
    add_section_header("Languages")
    story.append(Paragraph("English, Hindi, Kannada, Marathi, Telugu", body_style))
    
    doc.build(story)

if __name__ == "__main__":
    out_dir = r"c:\Users\AVINASH\Downloads\folioport\extracted\public\resume"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "Avinash-Basutkar-Resume.pdf")
    create_resume(out_path)
    print("Resume generated successfully at", out_path)
