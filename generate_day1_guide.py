from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

OUTPUT = r"C:\Users\terts\Downloads\portfolio-site\AUKTIE_Day1_Instructor_Guide.pdf"

# ── Colours ──────────────────────────────────────────────────────────────────
NAVY   = colors.HexColor("#1B3A6B")
BLUE   = colors.HexColor("#2563A8")
TEAL   = colors.HexColor("#0D7C66")
AMBER  = colors.HexColor("#B45309")
GREEN  = colors.HexColor("#1A5C35")
INFO   = colors.HexColor("#EFF6FF")
INFO_B = colors.HexColor("#2563A8")
TIP    = colors.HexColor("#F0FDF4")
TIP_B  = colors.HexColor("#1A5C35")
WARN   = colors.HexColor("#FFFBEB")
WARN_B = colors.HexColor("#B45309")
CODE_BG= colors.HexColor("#1E293B")
CODE_FG= colors.white
LIGHT  = colors.HexColor("#F1F5F9")
MID    = colors.HexColor("#CBD5E1")
DARK   = colors.HexColor("#334155")

W, H = A4
MARGIN = 20*mm
CONTENT_W = W - 2*MARGIN

# ── Styles ───────────────────────────────────────────────────────────────────
def styles():
    return {
        "title": ParagraphStyle("title",
            fontName="Helvetica-Bold", fontSize=22, textColor=colors.white,
            leading=28, spaceAfter=4),
        "subtitle": ParagraphStyle("subtitle",
            fontName="Helvetica", fontSize=11, textColor=colors.HexColor("#BFDBFE"),
            leading=16, spaceAfter=0),
        "meta": ParagraphStyle("meta",
            fontName="Helvetica", fontSize=9, textColor=colors.HexColor("#93C5FD"),
            leading=13, spaceAfter=0),
        "h1": ParagraphStyle("h1",
            fontName="Helvetica-Bold", fontSize=14, textColor=NAVY,
            leading=18, spaceBefore=14, spaceAfter=4,
            borderPad=0),
        "h2": ParagraphStyle("h2",
            fontName="Helvetica-Bold", fontSize=11, textColor=BLUE,
            leading=15, spaceBefore=10, spaceAfter=3),
        "h3": ParagraphStyle("h3",
            fontName="Helvetica-Bold", fontSize=10, textColor=DARK,
            leading=14, spaceBefore=7, spaceAfter=2),
        "body": ParagraphStyle("body",
            fontName="Helvetica", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=5),
        "body_bold": ParagraphStyle("body_bold",
            fontName="Helvetica-Bold", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=5),
        "bullet": ParagraphStyle("bullet",
            fontName="Helvetica", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=3, leftIndent=14, bulletIndent=0),
        "code": ParagraphStyle("code",
            fontName="Courier", fontSize=8.5, textColor=colors.HexColor("#93C5FD"),
            leading=13, leftIndent=8, rightIndent=8),
        "code_comment": ParagraphStyle("code_comment",
            fontName="Courier-Oblique", fontSize=8.5,
            textColor=colors.HexColor("#64748B"),
            leading=13, leftIndent=8, rightIndent=8),
        "callout_title": ParagraphStyle("callout_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=INFO_B,
            leading=13, spaceAfter=2),
        "callout_body": ParagraphStyle("callout_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "tip_title": ParagraphStyle("tip_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=TIP_B,
            leading=13, spaceAfter=2),
        "tip_body": ParagraphStyle("tip_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "warn_title": ParagraphStyle("warn_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=AMBER,
            leading=13, spaceAfter=2),
        "warn_body": ParagraphStyle("warn_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "footer": ParagraphStyle("footer",
            fontName="Helvetica", fontSize=8, textColor=colors.HexColor("#94A3B8"),
            leading=11, alignment=TA_CENTER),
        "th": ParagraphStyle("th",
            fontName="Helvetica-Bold", fontSize=8.5, textColor=colors.white,
            leading=12),
        "td": ParagraphStyle("td",
            fontName="Helvetica", fontSize=8.5, textColor=DARK,
            leading=12),
        "td_code": ParagraphStyle("td_code",
            fontName="Courier", fontSize=8, textColor=DARK,
            leading=12),
        "qa_q": ParagraphStyle("qa_q",
            fontName="Helvetica-Bold", fontSize=9, textColor=NAVY,
            leading=13, spaceAfter=1),
        "qa_a": ParagraphStyle("qa_a",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13, spaceAfter=5, leftIndent=10),
        "timing": ParagraphStyle("timing",
            fontName="Helvetica-Bold", fontSize=9, textColor=NAVY,
            leading=13),
        "page_num": ParagraphStyle("page_num",
            fontName="Helvetica", fontSize=8, textColor=colors.HexColor("#94A3B8"),
            alignment=TA_RIGHT),
    }

S = styles()

# ── Helper builders ───────────────────────────────────────────────────────────
def hr(color=MID, thickness=0.5, space=4):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceAfter=space, spaceBefore=space)

def spacer(h=4):
    return Spacer(1, h*mm)

def callout(title, body, kind="info"):
    bg  = INFO  if kind=="info"  else TIP  if kind=="tip"  else WARN
    bc  = INFO_B if kind=="info" else TIP_B if kind=="tip" else AMBER
    ts  = S["callout_title"] if kind=="info" else S["tip_title"] if kind=="tip" else S["warn_title"]
    bs  = S["callout_body"]  if kind=="info" else S["tip_body"]  if kind=="tip" else S["warn_body"]
    # Replace plain newlines with ReportLab <br/> tags
    body_html = body.replace("\n\n", "<br/><br/>").replace("\n", "<br/>")
    # Two rows, one column: title then body
    content = [
        [Paragraph(f"●  {title}", ts)],
        [Paragraph(body_html, bs)],
    ]
    t = Table(content, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), bg),
        ("LINEBEFORE",    (0,0), (-1,-1), 4, bc),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("TOPPADDING",    (0,0), (0,0), 7),
        ("BOTTOMPADDING", (0,0), (0,0), 2),
    ]))
    return [t, spacer(2)]

def code_block(lines, lang="sql"):
    rows = []
    for ln in lines:
        style = S["code_comment"] if ln.strip().startswith("--") or ln.strip().startswith("#") else S["code"]
        rows.append([Paragraph(ln.replace("&","&amp;").replace("<","&lt;"), style)])
    hdr = [[Paragraph(lang, ParagraphStyle("ch", fontName="Helvetica-Bold",
                fontSize=7.5, textColor=colors.HexColor("#64748B"), leading=11))]]
    all_rows = hdr + rows
    t = Table(all_rows, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), CODE_BG),
        ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#0F172A")),
        ("TOPPADDING",    (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
    ]))
    return [t, spacer(2)]

def data_table(headers, rows, col_widths=None):
    if col_widths is None:
        col_widths = [CONTENT_W / len(headers)] * len(headers)
    data = [[Paragraph(h, S["th"]) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), S["td"]) for c in row])
    t = Table(data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ("BACKGROUND",  (0,0), (-1,0), NAVY),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, LIGHT]),
        ("GRID",        (0,0), (-1,-1), 0.3, MID),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 7),
        ("RIGHTPADDING",  (0,0), (-1,-1), 7),
        ("VALIGN",      (0,0), (-1,-1), "TOP"),
    ]))
    return [t, spacer(3)]

def timing_block(chips):
    items = "     ".join(chips)
    t = Table([[Paragraph(items, S["timing"])]], colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), LIGHT),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
    ]))
    return [t, spacer(3)]

def section_header(icon, title, duration):
    row = [[
        Paragraph(icon, ParagraphStyle("ic", fontName="Helvetica-Bold",
            fontSize=14, textColor=colors.white, leading=16)),
        Paragraph(f"{title}<br/><font size='8' color='#93C5FD'>{duration}</font>",
            ParagraphStyle("sh", fontName="Helvetica-Bold", fontSize=11,
                textColor=colors.white, leading=16)),
    ]]
    t = Table(row, colWidths=[12*mm, CONTENT_W - 12*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("VALIGN",      (0,0), (-1,-1), "MIDDLE"),
    ]))
    return [t, spacer(2)]

def bullet(text):
    return Paragraph(f"•  {text}", S["bullet"])

def bold_body(text):
    return Paragraph(text, S["body"])

# ── Header / Footer ───────────────────────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    # Header bar
    canvas.setFillColor(NAVY)
    canvas.rect(0, H - 14*mm, W, 14*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(MARGIN, H - 9*mm, "AUKTIE PostgreSQL Programme  —  Day 1 Instructor Guide")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#93C5FD"))
    canvas.drawRightString(W - MARGIN, H - 9*mm, "CONFIDENTIAL — INSTRUCTOR ONLY")
    # Footer
    canvas.setFillColor(colors.HexColor("#94A3B8"))
    canvas.setFont("Helvetica", 8)
    canvas.drawString(MARGIN, 10*mm, "Dr. Tertsegha Joseph Anande  ·  AUKTIE × NASSCO  ·  23 June – 3 July 2026")
    canvas.drawRightString(W - MARGIN, 10*mm, f"Page {doc.page}")
    canvas.setStrokeColor(MID)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN, 13*mm, W - MARGIN, 13*mm)
    canvas.restoreState()

# ── Cover page ────────────────────────────────────────────────────────────────
def cover():
    elems = []
    # Full-width navy cover block
    cover_data = [[
        Paragraph("AUKTIE PostgreSQL Programme 2026", S["meta"]),
        Paragraph("Day 1 Instructor Delivery Guide", S["title"]),
        Paragraph("Foundations &amp; Database Architecture", S["subtitle"]),
        Paragraph(" ", S["meta"]),
        Paragraph("Tuesday 23 June 2026  ·  Innovation Hub, Birmingham", S["meta"]),
        Paragraph("Dr. Tertsegha Joseph Anande  ·  AUKTIE × NASSCO", S["meta"]),
    ]]
    t = Table(cover_data, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 16),
        ("RIGHTPADDING",  (0,0), (-1,-1), 16),
    ]))
    elems.append(t)
    elems.append(spacer(5))

    # Objectives chips row
    objectives = [
        "#1 Database Administration", "#3 Enterprise Architecture",
        "#9 Social Protection Systems", "#11 NSR Modernisation",
        "#12 Public Sector Digital Transformation"
    ]
    chip_data = [[Paragraph(o, ParagraphStyle("chip", fontName="Helvetica-Bold",
        fontSize=8, textColor=BLUE, leading=11)) for o in objectives]]
    tc = Table(chip_data, colWidths=[CONTENT_W/5]*5)
    tc.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), INFO),
        ("GRID", (0,0), (-1,-1), 0.3, INFO_B),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 5),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
    ]))
    elems.append(tc)
    elems.append(spacer(4))

    # Day Focus callout
    elems += callout(
        "Day Focus",
        "Day 1 establishes the mental model that underpins the entire programme. "
        "Participants must leave understanding WHY PostgreSQL behaves the way it does "
        "under concurrent load — not just how to run commands. Spend the most time on "
        "WAL and MVCC: every performance, security, and ETL topic in later days assumes "
        "this foundation.",
        "info"
    )

    # Contents
    elems.append(Paragraph("Contents", S["h1"]))
    elems.append(hr(NAVY, 1))
    contents = [
        ("Pre-Session Checklist", "Before the room opens"),
        ("09:30  Registration & Setup", "Verify participant connectivity"),
        ("10:00  Section 1 — Process/Memory/Storage", "~60 mins · Demo 1.1"),
        ("  Section 2 — Write-Ahead Logging (WAL)", "~40 mins · Key settings"),
        ("  Section 3 — MVCC", "~40 mins · Demo 1.5 (two terminals)"),
        ("  Section 4 — Normalisation & NSR Schema", "~50 mins · Demo 1.7"),
        ("Exercises & Knowledge Check", "Afternoon"),
        ("Closing Message", "End of day"),
        ("Common Participant Questions", "Q&A reference"),
    ]
    for title, note in contents:
        row = [[
            Paragraph(title, S["body_bold"]),
            Paragraph(note, ParagraphStyle("cn", fontName="Helvetica-Oblique",
                fontSize=9, textColor=colors.HexColor("#64748B"), leading=13)),
        ]]
        t = Table(row, colWidths=[CONTENT_W*0.55, CONTENT_W*0.45])
        t.setStyle(TableStyle([
            ("LINEBELOW", (0,0), (-1,-1), 0.3, MID),
            ("TOPPADDING",    (0,0), (-1,-1), 4),
            ("BOTTOMPADDING", (0,0), (-1,-1), 4),
            ("LEFTPADDING",   (0,0), (-1,-1), 0),
        ]))
        elems.append(t)

    elems.append(PageBreak())
    return elems

# ── Main content ──────────────────────────────────────────────────────────────
def body_content():
    elems = []

    # ── Pre-session ──────────────────────────────────────────────────────────
    elems.append(Paragraph("Pre-Session Checklist", S["h1"]))
    elems.append(hr(NAVY, 1))
    pre = [
        "Project the platform URL: drtertseghaanande.com/postgresql-workshop.html",
        "Log in as Instructor (PIN: AUKTIE2026) — unlocks all days and shows cohort dashboard",
        "Open two psql terminal windows on the projector — label them 'Terminal A – Lagos' and 'Terminal B – Kano'",
        "Verify each participant's laptop can reach the platform and run psql",
        "Direct any late arrivals to the Pre-Session Setup page on the platform",
        "Check projector resolution — code blocks must be readable from the back of the room",
    ]
    for p in pre:
        elems.append(bullet(p))
    elems.append(spacer(3))

    # ── 09:30 ────────────────────────────────────────────────────────────────
    elems.append(Paragraph("09:30 — Registration &amp; Setup Verification", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems += timing_block(["⏰ 09:30  Doors open", "⏰ 10:00  Training starts"])
    elems.append(bold_body(
        "Ask participants to open the platform and mark Pre-Session Setup complete. "
        "Walk the room and fix any PostgreSQL connection issues before 10:00. "
        "Do not start the technical content until at least 12 of 14 participants are connected."
    ))
    elems.append(spacer(3))

    # ── Section 1 ────────────────────────────────────────────────────────────
    elems += section_header("🏗", "Section 1 — PostgreSQL Process / Memory / Storage", "~60 mins")

    elems.append(Paragraph("What to cover", S["h3"]))
    items1 = [
        "The <b>postmaster</b> forks one backend process per client connection — draw this on the whiteboard: one box for postmaster, arrows to multiple backend boxes, each connected to a client",
        "Walk through the memory table below — shared_buffers is the single most important tuning parameter (target: 25% of RAM)",
        "Storage: 8KB pages, tuples inside pages, dead tuples left in place after UPDATE/DELETE — VACUUM reclaims them",
    ]
    for i in items1:
        elems.append(Paragraph(f"•  {i}", S["bullet"]))
    elems.append(spacer(2))

    elems += data_table(
        ["Component", "Purpose", "Config parameter"],
        [
            ["shared_buffers", "Shared page cache (all backends)", "shared_buffers"],
            ["work_mem", "Per-sort/hash operation memory", "work_mem"],
            ["wal_buffers", "WAL write buffer", "wal_buffers"],
            ["maintenance_work_mem", "VACUUM, CREATE INDEX", "maintenance_work_mem"],
        ],
        [44*mm, 90*mm, 46*mm]
    )

    elems += callout(
        "What each memory area actually does",
        "<b>shared_buffers</b> is a pool shared by every connection. When PostgreSQL reads data from disk "
        "it stores a copy here so the next query gets it from RAM instead — think of it as a shared filing "
        "cabinet the whole office can reach into. It is the most important parameter to tune: the more data "
        "you keep cached, the fewer slow disk reads happen. Target 25% of total RAM (e.g. 4 GB on a 16 GB server).\n\n"
        "<b>work_mem</b> is the memory budget for a single sort or hash operation — ORDER BY, JOIN, and DISTINCT "
        "each get their own slice. With 14 participants connected and each running complex queries, work_mem is "
        "multiplied across all concurrent operations. Set it too high and you exhaust RAM. The default (4 MB) "
        "is conservative; raise it only when slow sorts are confirmed.\n\n"
        "<b>wal_buffers</b> is a small staging area where WAL entries are assembled in memory before being "
        "flushed to the WAL log file on disk — like a notepad you scribble on before writing the final record. "
        "PostgreSQL tunes this automatically so it rarely needs manual adjustment.\n\n"
        "<b>maintenance_work_mem</b> is a separate budget reserved for maintenance operations — VACUUM cleaning "
        "up dead tuples and CREATE INDEX building a new index from scratch. Giving maintenance its own allocation "
        "keeps it from competing with live queries for memory.",
        "info"
    )

    elems.append(Paragraph("Storage Layout — 8KB Pages, Tuples &amp; Dead Tuples", S["h2"]))
    elems += callout(
        "Pages, tuples, and dead tuples explained",
        "<b>8KB pages:</b> PostgreSQL never reads individual rows from disk — it reads entire 8-kilobyte blocks "
        "called pages. Each page is a fixed-size chunk of a table file on disk. When you query one row, PostgreSQL "
        "loads the whole page that contains it into shared_buffers. This is why shared_buffers size matters: if "
        "the page is already cached the query is fast; if not, PostgreSQL must go to disk.\n\n"
        "<b>Tuples:</b> a tuple is one row in a table. Each page holds as many tuples as fit within 8 KB. "
        "Every tuple carries two hidden system columns — xmin (the transaction that created it) and xmax "
        "(the transaction that deleted or replaced it). These are the numbers MVCC uses to decide whether "
        "a row is visible to a given query.\n\n"
        "<b>Dead tuples:</b> when you UPDATE a row, PostgreSQL does not overwrite it — it writes a new version "
        "and marks the old one expired by setting xmax. The old version is now a dead tuple: invisible to new "
        "queries but still sitting on disk taking up space. PostgreSQL leaves it deliberately because a "
        "transaction that started before the update may still need to see it. Once no active transaction can "
        "possibly need the old version, VACUUM marks that space as reusable. A table that is updated heavily "
        "without regular VACUUM grows larger on disk even if the row count stays the same — this is called "
        "table bloat, and Day 6 covers how to detect and fix it.",
        "info"
    )

    elems.append(Paragraph("Demo 1.1 — Query PostgreSQL Settings", S["h2"]))
    elems.append(bold_body(
        "Project the terminal and run the query below. Point out: each row is a backend process. "
        "Count the rows — that is how many client connections are open. Ask the room: "
        "<i>\"What happens to this list when all 14 of you connect simultaneously?\"</i>"
    ))
    elems += code_block([
        "-- View active backend processes",
        "SELECT pid, usename, application_name, state",
        "FROM pg_stat_activity",
        "ORDER BY pid;",
    ])
    elems.append(spacer(3))

    # ── Section 2 ────────────────────────────────────────────────────────────
    elems += section_header("📝", "Section 2 — Write-Ahead Logging (WAL)", "~40 mins")

    elems.append(bold_body(
        "<b>Key message:</b> WAL delivers Durability. Sequential writes are faster than "
        "random writes — that is the engineering insight that makes PostgreSQL fast and crash-safe."
    ))

    elems.append(Paragraph("Step 1 — The crash scenario without WAL", S["h3"]))
    elems += callout(
        "Explain to participants",
        "Imagine PostgreSQL is in the middle of writing a change — updating a household pmt_score. "
        "That write is not instant; it involves multiple steps at the hardware level. If power cuts "
        "halfway through, the data page on disk is in a half-written, corrupted state — some bytes "
        "reflect the old value, some the new one. PostgreSQL has no way to know which parts made it. "
        "The database is now unrecoverable without a full restore from backup.",
        "warn"
    )

    elems.append(Paragraph("Step 2 — WAL as an insurance log", S["h3"]))
    elems += callout(
        "The WAL solution",
        "WAL changes the order of operations. Before PostgreSQL touches the actual data page, it first "
        "writes a record to the WAL log describing exactly what it is about to do: 'I am going to change "
        "this row from value X to value Y.' Only after that log record is safely on disk does PostgreSQL "
        "modify the data page. If power cuts now, the data page may still be corrupt — but the WAL log "
        "is intact. On restart, PostgreSQL reads the log and replays every committed change, reconstructing "
        "the exact state the database should be in. No data loss, no corruption.\n\n"
        "The reason this is fast: WAL writes are sequential — always appended to the end of one log file. "
        "Sequential disk writes are far faster than the random writes needed to update scattered data pages "
        "across many different table files.",
        "info"
    )

    elems.append(Paragraph("Step 3 — Checkpoint", S["h3"]))
    elems += callout(
        "What a checkpoint does",
        "A checkpoint is a deliberate moment where PostgreSQL flushes every dirty page in shared_buffers "
        "to its proper place on disk, then writes a checkpoint record into the WAL marking that point. "
        "After a crash, PostgreSQL only needs to replay WAL from the most recent checkpoint — everything "
        "before it is already safely on disk. Checkpoints make crash recovery fast and time-bounded.",
        "info"
    )

    elems += callout(
        "Key insight",
        "Sequential WAL writes are much faster than random data-page writes. "
        "This is why WAL enables high throughput even on spinning disks.",
        "tip"
    )

    elems.append(Paragraph("Key WAL Settings — show and explain on the platform", S["h3"]))
    elems += code_block([
        "SELECT name, setting, unit",
        "FROM pg_settings",
        "WHERE name IN ('wal_level','synchronous_commit','max_wal_size',",
        "               'checkpoint_completion_target','wal_compression')",
        "ORDER BY name;",
    ])

    elems += data_table(
        ["Parameter", "What to explain to participants"],
        [
            ["wal_level", "Must be at least 'replica' for streaming standby servers"],
            ["synchronous_commit", "'on' = safe; 'off' = 3x write speed but up to 600ms data loss on crash. Use off only for bulk loads, never for payments"],
            ["max_wal_size", "Larger = fewer checkpoints = less I/O spikes, but longer crash recovery"],
            ["checkpoint_completion_target", "0.9 = spread I/O over 90% of the interval. Ask: why would we want checkpoints to take longer?"],
            ["wal_compression", "Free CPU-for-I/O trade. Almost always worth enabling on modern hardware"],
        ],
        [52*mm, CONTENT_W - 52*mm]
    )

    elems.append(Paragraph("synchronous_commit — the parameter participants ask about most", S["h2"]))
    elems += callout(
        "How to explain the trade-off",
        "With synchronous_commit = on (the default), when a transaction commits, PostgreSQL waits until "
        "the WAL record has been physically written to disk before telling the application 'commit succeeded.' "
        "The data is safe even if the server dies a millisecond later.\n\n"
        "With synchronous_commit = off, PostgreSQL responds immediately without waiting for the WAL record "
        "to reach disk — roughly 3x faster, but if the server crashes within the next ~600 milliseconds, "
        "the most recent commits may be lost.\n\n"
        "For NSR: payment records and beneficiary enrolments must always use on — losing a committed payment "
        "is unacceptable. Bulk analytics imports and staging table loads can use off because if they fail, "
        "you simply re-run the import.",
        "info"
    )

    elems.append(Paragraph("checkpoint_completion_target = 0.9 — ask the room this question", S["h2"]))
    elems += callout(
        "Ask: \"Why would we want checkpoints to take longer?\"",
        "This feels counterintuitive — so it makes a good discussion question.\n\n"
        "When a checkpoint fires, PostgreSQL must write potentially thousands of dirty pages to disk. "
        "If it writes them all at once, there is a sudden spike of disk I/O — queries slow down and "
        "the system feels sluggish for several seconds.\n\n"
        "checkpoint_completion_target = 0.9 tells PostgreSQL to spread those writes over 90% of the "
        "interval between checkpoints rather than doing them all at once. If checkpoints fire every "
        "5 minutes, PostgreSQL takes up to 4.5 minutes to write the dirty pages — a small continuous "
        "trickle in the background rather than one large burst.\n\n"
        "Result: smooth, consistent I/O instead of periodic spikes. For the NSR where caseworkers "
        "expect consistent response times, this is the correct setting.",
        "info"
    )
    elems.append(spacer(3))

    # ── Section 3 ────────────────────────────────────────────────────────────
    elems += section_header("🔄", "Section 3 — Multi-Version Concurrency Control (MVCC)", "~40 mins")

    elems += callout(
        "Most important section of the day",
        "Every Day 3 (security), Day 6 (performance), and Day 7 (ETL) concept assumes "
        "participants understand MVCC. Do not rush this section.",
        "warn"
    )

    elems.append(Paragraph("Delivery sequence", S["h3"]))
    elems.append(Paragraph("Step 1 — The problem: two caseworkers, one record", S["h3"]))
    elems += callout(
        "Set the scene for participants",
        "In the NSR, multiple caseworkers across different states are connected to the same database "
        "simultaneously. A caseworker in Lagos opens a household record to review it. At the same moment "
        "a caseworker in Kano tries to update the pmt_score on that same household. Both are hitting the "
        "same row at the same time.\n\n"
        "What could go wrong? If both write simultaneously with no coordination, one write could overwrite "
        "the other — data is lost. If someone reads while a write is halfway through, they see a partially "
        "updated row — corrupted data.",
        "warn"
    )

    elems.append(Paragraph("Step 2 — The naive solution: locks (and why they fail)", S["h3"]))
    elems += callout(
        "Why locks alone are not the answer",
        "The obvious fix is locks: before anyone reads or writes a row, they claim a lock and nobody else "
        "can touch it until it is released.\n\n"
        "The problem: readers block writers and writers block readers. A caseworker in Lagos simply viewing "
        "a household — running a SELECT — holds a read lock. A caseworker in Kano who needs to update that "
        "same household has to wait until Lagos finishes reading. In a system with 14 users all querying "
        "constantly, everything grinds to a halt waiting for locks to be released. Response times become "
        "unpredictable and caseworkers experience freezes.",
        "warn"
    )

    elems.append(Paragraph("Step 3 — The MVCC solution: new versions instead of overwrites", S["h3"]))
    elems += callout(
        "How MVCC eliminates the problem",
        "PostgreSQL never modifies a row in place. When a row is updated, PostgreSQL writes a brand new "
        "version of the row alongside the old one. The old version is marked with an expiry transaction ID "
        "(xmax) but left physically on disk. The new version gets its own creation transaction ID (xmin). "
        "Each active transaction sees whichever version was current at the moment that transaction started.\n\n"
        "Result: readers never block writers and writers never block readers. The Lagos caseworker's SELECT "
        "reads the version that existed when her transaction began. The Kano caseworker's UPDATE creates a "
        "new version without touching what Lagos is reading. Both proceed simultaneously with no waiting.",
        "info"
    )

    elems += data_table(
        ["MVCC concept", "What it means in plain terms"],
        [
            ["xmin", "Hidden column on every tuple recording the transaction ID that created this row version. A query can only see a row if its xmin transaction had committed before the reader's snapshot was taken."],
            ["xmax", "Hidden column recording the transaction ID that deleted or replaced this version. A row with xmax set is expired — invisible to transactions that started after that deletion committed. Zero means the row is still live."],
            ["Snapshot isolation", "Each transaction gets a consistent point-in-time view of the database, fixed at the moment BEGIN was executed. Subsequent commits by others do not bleed into the current transaction's view."],
            ["Dead tuple", "The old row version left behind after an UPDATE. It has xmax set so it is expired, but it is still physically on disk taking up space — left there in case an older open transaction still needs to see it."],
            ["VACUUM", "The cleanup process that scans tables and marks dead tuples as reusable space once no active transaction can possibly need them. Without VACUUM, dead tuples accumulate and the table file grows — this is table bloat."],
        ],
        [38*mm, CONTENT_W - 38*mm]
    )

    elems.append(Paragraph("Demo 1.5 — MVCC Two-Terminal Visibility", S["h2"]))
    elems += callout(
        "Instructor note — run this setup BEFORE the session starts",
        "The schema and sample data must exist before you attempt the demo. "
        "Steps 1 and 2 below should be completed during your pre-session preparation, "
        "not in front of participants. Steps 3 and 4 are the live demo.",
        "warn"
    )

    elems.append(Paragraph("Step 1 — Create the NSR schema and tables (pre-session)", S["h3"]))
    elems.append(bold_body("Open one psql terminal and connect: psql -U postgres"))
    elems += code_block([
        "-- Create the schema",
        "CREATE SCHEMA nsr;",
        "",
        "CREATE TABLE nsr.states (",
        "  state_code  CHAR(2)  PRIMARY KEY,",
        "  state_name  TEXT     NOT NULL UNIQUE",
        ");",
        "",
        "CREATE TABLE nsr.lgas (",
        "  lga_id      SERIAL   PRIMARY KEY,",
        "  state_code  CHAR(2)  NOT NULL REFERENCES nsr.states(state_code),",
        "  lga_name    TEXT     NOT NULL",
        ");",
        "",
        "CREATE TABLE nsr.households (",
        "  household_id      BIGSERIAL    PRIMARY KEY,",
        "  household_code    TEXT         NOT NULL UNIQUE,",
        "  lga_id            INT          NOT NULL REFERENCES nsr.lgas(lga_id),",
        "  head_name         TEXT         NOT NULL,",
        "  pmt_score         NUMERIC(8,3),",
        "  enumeration_round SMALLINT,",
        "  is_active         BOOLEAN      NOT NULL DEFAULT TRUE",
        ");",
    ])

    elems.append(Paragraph("Step 2 — Insert sample data (pre-session)", S["h3"]))
    elems += code_block([
        "INSERT INTO nsr.states VALUES ('LA','Lagos'), ('KN','Kano');",
        "",
        "INSERT INTO nsr.lgas (state_code, lga_name)",
        "VALUES ('LA','Ikeja'), ('KN','Kano Municipal');",
        "",
        "-- Insert the household used in the demo",
        "INSERT INTO nsr.households (household_code, lga_id, head_name, pmt_score)",
        "VALUES ('HH-LA-001', 1, 'Fatima Yusuf', 28.5);",
        "",
        "-- Confirm it is there — you should see pmt_score = 28.5",
        "SELECT household_id, household_code, head_name, pmt_score",
        "FROM nsr.households;",
    ])

    elems.append(Paragraph("Step 3 — Open a second terminal window (pre-session)", S["h3"]))
    elems.append(bold_body(
        "Open a second Command Prompt or PowerShell window — do not close the first. "
        "Connect to PostgreSQL in the second window: psql -U postgres. "
        "Place both terminals side by side on the projector screen. "
        "Label them visually so the room can follow which is which."
    ))

    elems.append(Paragraph("Step 4 — Run the live demo", S["h3"]))

    elems += callout(
        "Critical: use REPEATABLE READ in Terminal A",
        "PostgreSQL defaults to READ COMMITTED isolation — each statement gets its own fresh snapshot. "
        "Under READ COMMITTED, Terminal A's second SELECT would see Terminal B's committed change (42.5) "
        "immediately, ruining the demo.\n\n"
        "You must start Terminal A's transaction with ISOLATION LEVEL REPEATABLE READ. This fixes the "
        "snapshot for the entire transaction, so Terminal A sees a consistent view regardless of what "
        "Terminal B commits in between. If you forget this and the demo shows 42.5 on the second SELECT, "
        "see the Troubleshooting table below.",
        "warn"
    )

    elems.append(Paragraph("Terminal A — Lagos caseworker", S["h3"]))
    elems.append(bold_body(
        "Run BEGIN with REPEATABLE READ and the SELECT. Then stop — do not COMMIT or type anything else. "
        "Tell the room: 'Terminal A has an open transaction. Its snapshot is fixed at 28.5 — right now.'"
    ))
    elems += code_block([
        "-- IMPORTANT: specify REPEATABLE READ so the snapshot is fixed for the whole transaction",
        "BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;",
        "SELECT household_id, head_name, pmt_score",
        "FROM nsr.households",
        "WHERE household_code = 'HH-LA-001';",
        "-- You see pmt_score = 28.5. Leave this transaction OPEN.",
    ])

    elems.append(Paragraph("Terminal B — Kano caseworker", S["h3"]))
    elems.append(bold_body(
        "Switch to Terminal B. Run the UPDATE and COMMIT. "
        "Tell the room: 'Terminal B committed. The new value 42.5 is now in the database.'"
    ))
    elems += code_block([
        "BEGIN;",
        "UPDATE nsr.households",
        "SET pmt_score = 42.5",
        "WHERE household_code = 'HH-LA-001';",
        "COMMIT;",
    ])

    elems.append(Paragraph("The reveal — back to Terminal A", S["h3"]))
    elems += callout(
        "Ask the room before running the query",
        "\"Terminal B committed 42.5. If I run the same SELECT again in Terminal A right now — "
        "what value will I see?\" Pause. Let participants answer. Then run it.",
        "tip"
    )
    elems += code_block([
        "-- Re-run the same SELECT in Terminal A",
        "SELECT household_id, head_name, pmt_score",
        "FROM nsr.households",
        "WHERE household_code = 'HH-LA-001';",
        "-- Terminal A still shows 28.5 — not 42.5.",
    ])
    elems.append(bold_body(
        "Terminal A still shows 28.5. This is snapshot isolation: Terminal A's view was fixed at BEGIN. "
        "Terminal B's commit happened after that snapshot — so it is outside Terminal A's view entirely."
    ))

    elems.append(Paragraph("Close Terminal A's transaction and re-check", S["h3"]))
    elems += code_block([
        "-- In Terminal A: close the transaction",
        "COMMIT;",
        "",
        "-- Now run the SELECT again",
        "SELECT household_id, head_name, pmt_score",
        "FROM nsr.households",
        "WHERE household_code = 'HH-LA-001';",
        "-- Now Terminal A sees 42.5 — a fresh snapshot sees the committed change.",
    ])
    elems.append(bold_body(
        "Now Terminal A sees 42.5. A new transaction opens a fresh snapshot "
        "and sees the world as it is today — including Terminal B's committed change."
    ))

    elems += data_table(
        ["Moment", "What to say"],
        [
            ["After Terminal A's first SELECT", "'Terminal A has an open transaction. Its snapshot is fixed right now at 28.5.'"],
            ["After Terminal B COMMITs", "'Terminal B committed. 42.5 is now in the database.'"],
            ["Before Terminal A's second SELECT", "'What value will Terminal A see now?' — pause for answers."],
            ["After Terminal A still shows 28.5", "'Why? Because Terminal A's snapshot was taken at BEGIN. Terminal B's commit is invisible to it.'"],
            ["After Terminal A COMMITs and sees 42.5", "'New transaction, new snapshot — now it sees the world as it is today.'"],
        ],
        [60*mm, CONTENT_W - 60*mm]
    )

    elems += data_table(
        ["Problem during demo", "Fix"],
        [
            ["Terminal A shows 42.5 on second SELECT (should show 28.5)", "You used plain BEGIN instead of REPEATABLE READ. ROLLBACK in Terminal A, reset value to 28.5, then restart from Step 4 using: BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;"],
            ["Value keeps changing between SELECTs with no UPDATE in between", "Another terminal session is still open with an uncommitted or re-run UPDATE. Go to every open terminal and run ROLLBACK. Then reset pmt_score to 28.5 and restart."],
            ["schema 'nsr' already exists", "Run: DROP SCHEMA nsr CASCADE;  then repeat Step 1"],
            ["relation does not exist", "Wrong database — run: \\c postgres  then retry"],
            ["duplicate key on households", "Run: TRUNCATE nsr.households RESTART IDENTITY CASCADE;  then re-insert"],
            ["duplicate key on states or lgas", "Run: TRUNCATE nsr.lgas RESTART IDENTITY CASCADE; TRUNCATE nsr.states RESTART IDENTITY CASCADE;  then re-insert all data from Step 2"],
            ["Second terminal asks for password", "Use the same password as the first terminal"],
        ],
        [68*mm, CONTENT_W - 68*mm]
    )
    elems.append(spacer(3))

    # ── Section 4 ────────────────────────────────────────────────────────────
    elems += section_header("📐", "Section 4 — Normalisation &amp; NSR Schema Design", "~50 mins")

    elems.append(Paragraph("Delivery sequence", S["h3"]))
    seq4 = [
        "Show the problem of a flat file: state_name repeated on every household row — 10 million rows, 10 million copies of 'Lagos'",
        "3NF rule: non-key columns depend only on the primary key, not on each other",
        "Walk through the schema DDL — use the blue info boxes on the platform to explain each design decision",
    ]
    for s in seq4:
        elems.append(Paragraph(f"•  {s}", S["bullet"]))
    elems.append(spacer(2))

    elems.append(Paragraph("Core NSR Tables DDL", S["h3"]))
    elems += code_block([
        "CREATE TABLE nsr.states (state_code CHAR(2) PRIMARY KEY, state_name TEXT NOT NULL UNIQUE);",
        "",
        "CREATE TABLE nsr.lgas (",
        "  lga_id     SERIAL  PRIMARY KEY,",
        "  state_code CHAR(2) NOT NULL REFERENCES nsr.states(state_code),",
        "  lga_name   TEXT    NOT NULL",
        ");",
        "",
        "CREATE TABLE nsr.households (",
        "  household_id      BIGSERIAL    PRIMARY KEY,",
        "  household_code    TEXT         NOT NULL UNIQUE,",
        "  lga_id            INT          NOT NULL REFERENCES nsr.lgas(lga_id),",
        "  head_name         TEXT         NOT NULL,",
        "  pmt_score         NUMERIC(8,3),",
        "  enumeration_round SMALLINT,",
        "  is_active         BOOLEAN      NOT NULL DEFAULT TRUE",
        ");",
        "",
        "CREATE TABLE nsr.individuals (",
        "  individual_id BIGSERIAL PRIMARY KEY,",
        "  household_id  BIGINT    NOT NULL REFERENCES nsr.households(household_id) ON DELETE CASCADE,",
        "  nin           CHAR(11)  UNIQUE CHECK (nin IS NULL OR nin ~ '^[A-Z]{2}[0-9]{7}[A-Z]{2}$'),",
        "  full_name     TEXT      NOT NULL,",
        "  dob           DATE      CHECK (dob > '1900-01-01' AND dob <= CURRENT_DATE),",
        "  gender        CHAR(1)   CHECK (gender IN ('M','F','O'))",
        ");",
    ])

    elems += data_table(
        ["Design decision", "Why it matters"],
        [
            ["BIGSERIAL on individuals", "NSR can reach tens of millions of rows — SERIAL overflows at ~2.1 billion"],
            ["ON DELETE CASCADE", "Removing a duplicate household cascades to its members — no orphaned rows"],
            ["NIN regex CHECK", "Enforces NIMC format at DB level — not bypassable by application code"],
            ["dob range CHECK", "Rejects pre-1900 dates and future dates — catches field enumeration errors"],
            ["NULLABLE nin", "Children may not yet have a NIN — NULL is valid; UNIQUE still allows multiple NULLs"],
        ],
        [58*mm, CONTENT_W - 58*mm]
    )

    elems.append(Paragraph("Demo 1.7 — Live Normalisation &amp; FK Violation", S["h2"]))

    elems += callout(
        "What this demo shows",
        "This demo makes two points simultaneously. First, it shows normalisation working: state names "
        "are stored once in nsr.states and referenced by a two-letter code everywhere else — Lagos does "
        "not appear on every row of nsr.lgas or nsr.households. Second, it shows the database actively "
        "enforcing that structure through a foreign key constraint. You cannot insert an LGA that belongs "
        "to a state that does not exist. The database rejects it outright — no application code needed.",
        "info"
    )

    elems += code_block([
        "-- Insert sample states",
        "INSERT INTO nsr.states VALUES ('LA','Lagos'),('KN','Kano'),('AB','Abuja');",
        "",
        "-- Insert sample LGAs — each references a valid state_code",
        "INSERT INTO nsr.lgas (state_code, lga_name)",
        "VALUES ('LA','Ikeja'),('LA','Eti-Osa'),('KN','Kano Municipal');",
        "",
        "-- Demonstrate FK enforcement — this will error",
        "INSERT INTO nsr.lgas (state_code, lga_name) VALUES ('XX','Invalid State');",
        "-- Expected: ERROR: insert or update on table lgas violates foreign key constraint",
    ])

    elems += callout(
        "What the error means — explain this to the room",
        "The error 'violates foreign key constraint' means PostgreSQL tried to look up state_code 'XX' "
        "in nsr.states and found nothing there. It refuses to create an LGA that belongs to a state that "
        "does not exist — that would be an orphaned row with no parent, breaking the referential integrity "
        "of the entire schema.\n\n"
        "This is the database protecting itself. If this check were left to application code instead, a bug, "
        "a direct psql session, or a bulk import could silently create thousands of LGAs with invalid state "
        "codes. At NSR scale — millions of households — that kind of corruption is extremely hard to detect "
        "and very costly to fix.",
        "warn"
    )

    elems += callout(
        "The solution — always insert in parent-first order",
        "Foreign key constraints enforce a strict insertion order: parent rows must exist before child rows "
        "can reference them.\n\n"
        "Correct order for the NSR schema:\n"
        "1. nsr.states  (no dependencies — insert first)\n"
        "2. nsr.lgas  (references nsr.states — insert second)\n"
        "3. nsr.households  (references nsr.lgas — insert third)\n"
        "4. nsr.individuals  (references nsr.households — insert last)\n\n"
        "If you are loading data from a CSV or external system and get FK violations, check two things: "
        "(1) the state_code or lga_id in the child table actually exists in the parent table, and "
        "(2) you are inserting tables in the correct order. For bulk loads, you can temporarily disable "
        "FK checks with SET session_replication_role = replica — but only do this when you are certain "
        "the data is clean, and always re-enable it immediately after.",
        "tip"
    )

    elems.append(bold_body(
        "Show the error to the room. Ask: 'Where would this validation live if we did not have a FK — "
        "in the application? What happens when someone bypasses the application and inserts directly?' "
        "The answer is: nothing stops it. The constraint is the only reliable guarantee."
    ))
    elems.append(spacer(3))

    # ── Exercises ────────────────────────────────────────────────────────────
    elems.append(PageBreak())
    elems.append(Paragraph("Exercises &amp; Knowledge Check", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems.append(bold_body(
        "Direct participants to the Exercises tab on Day 1 in the platform. "
        "Three exercises are available:"
    ))
    elems += data_table(
        ["Exercise", "Level", "What to look for"],
        [
            ["1 — Identify normalisation problems in a flat NSR dataset", "Basic", "Can they spot repeated data and transitive dependencies?"],
            ["2 — Write CREATE TABLE DDL for a new NSR table", "Intermediate", "Correct FK, CHECK constraints, BIGSERIAL, NOT NULL"],
            ["3 — Explain WAL and MVCC in writing (NSR context)", "Advanced", "The written explanation is the real diagnostic — if they cannot explain it in their own words they need to revisit"],
        ],
        [68*mm, 20*mm, CONTENT_W - 88*mm]
    )
    elems += callout(
        "Walk the room",
        "The advanced exercise (written explanation) is the real diagnostic. "
        "Any participant who cannot explain the WAL → MVCC → VACUUM triad in their own words "
        "needs more time on those sections before Day 2 begins.",
        "warn"
    )
    elems.append(bold_body(
        "After exercises, open the Knowledge Check tab. Use the quiz scores as a room-temperature check. "
        "Any question with widespread wrong answers is a signal to revisit that concept at the start of Day 2."
    ))
    elems.append(spacer(3))

    # ── Closing ──────────────────────────────────────────────────────────────
    elems.append(Paragraph("Day 1 Closing Message", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems += callout(
        "Suggested closing",
        "\"Everything we do this week — the security model, the performance tuning, the ETL pipelines — "
        "sits on top of what you learned today. WAL means your data survives a power cut. MVCC means your "
        "caseworkers never block each other. The schema you built today is the one you will query, secure, "
        "tune, and migrate for the rest of the programme.\"",
        "tip"
    )
    elems.append(bold_body(
        "Mark Day 1 complete using the Mark Complete button on the platform. "
        "Remind participants that Day 2 begins at 09:30 and covers SQL Fundamentals — "
        "they should ensure their PostgreSQL connection is working before they arrive."
    ))
    elems.append(spacer(3))

    # ── Q&A ──────────────────────────────────────────────────────────────────
    elems.append(Paragraph("Common Participant Questions", S["h1"]))
    elems.append(hr(NAVY, 1))
    qa = [
        ("How much RAM should shared_buffers get?",
         "Start at 25% of total RAM. Tune upward if cache hit rate (pg_stat_database) is below 99%."),
        ("When should I set synchronous_commit = off?",
         "Bulk analytics loads and staging table ingestion only — never for payment or audit records."),
        ("Does VACUUM run automatically?",
         "Yes — autovacuum runs in the background. It can fall behind on very busy tables. Day 6 covers how to detect table bloat and adjust autovacuum settings."),
        ("Can we skip 3NF and just use flat tables?",
         "Yes, and you pay the price in update anomalies, storage waste, and broken referential integrity. The NSR at scale cannot afford that."),
        ("What happens to the old row version after a COMMIT?",
         "It becomes a dead tuple — invisible to new transactions but still occupying disk space. VACUUM (or autovacuum) reclaims it."),
        ("Why does Terminal A still see the old pmt_score after Terminal B commits?",
         "Two reasons work together. First, Terminal A was started with REPEATABLE READ isolation, so its snapshot is fixed at BEGIN and does not change for the life of the transaction. Second, PostgreSQL MVCC writes a new row version for the update rather than overwriting the old one — so the old version is still physically present on disk for Terminal A to read. Under the default READ COMMITTED level, Terminal A would see 42.5 immediately on the next SELECT, which is why the demo must use REPEATABLE READ."),
    ]
    for q, a in qa:
        elems.append(Paragraph(f"Q: {q}", S["qa_q"]))
        elems.append(Paragraph(f"A: {a}", S["qa_a"]))

    return elems

# ── Build ─────────────────────────────────────────────────────────────────────
def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=18*mm, bottomMargin=18*mm,
        title="AUKTIE Day 1 Instructor Guide",
        author="Dr. Tertsegha Joseph Anande",
        subject="PostgreSQL Database Fundamentals — Day 1 Delivery Guide",
    )
    story = cover() + body_content()
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"PDF written to: {OUTPUT}")

if __name__ == "__main__":
    build()
