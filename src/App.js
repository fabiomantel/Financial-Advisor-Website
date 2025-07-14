import React, { useState, useEffect } from 'react';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Commented out as requested

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Validation helpers
  const validateName = (name) => /^[A-Za-zא-ת\s'-]{2,}$/.test(name.trim());
  const validatePhone = (phone) => /^05\d{8}$/.test(phone.replace(/\D/g, ''));
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    'שלום פביו, ראיתי את האתר שלך ומעניין אותי לשמוע עוד על התוכנית להגדלת ההון.  \nאני אשמח לקבוע שיחת היכרות ולבדוק האם זה יכול להתאים לי.'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!validateName(formData.name)) {
      setFormError('נא להזין שם מלא תקין בעברית או באנגלית.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setFormError('נא להזין מספר טלפון ישראלי תקין (10 ספרות, מתחיל ב-05).');
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormError('נא להזין כתובת מייל תקינה.');
      return;
    }
    setIsSubmitting(true);
    // TODO: Integrate real email sending service here
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      alert('הטופס נשלח בהצלחה ✅\nאני אעבור על הפרטים ואחזור אליך בהקדם לפגישת היכרות.\nזוהי התחלה מצוינת לעשות סדר בהון שלך ולהתחיל לצמוח.');
      setIsSubmitting(false);
    }, 1200);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App" dir="rtl" style={{ fontFamily: 'Heebo, Arial, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src="/circle-profile.png" alt="פביו מנטל" className="profile-pic" />
          <h1 className="hero-title">תוכנית להגדלת ההון<br /><span className="highlight">אדריכלות פיננסית לצמיחה</span></h1>
          <p className="hero-sub">איך תסדר את ההון שלך מחדש כדי להאיץ צמיחה</p>
          <a
            href={`https://wa.me/972523631525?text=${whatsappMessage}`}
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            לתיאום פגישת היכרות חינמית
          </a>
        </div>
      </section>

      {/* About the Program */}
      <section className="section section-bg1">
        <h2 className="section-title">מה כוללת התוכנית?</h2>
        <p className="section-desc">תוכנית ייחודית המעניקה לך סדר פיננסי, כלים מעשיים, ותוכנית פעולה אישית שתלווה אותך לאורך שנים. במהלך שני מפגשים אישיים נבנה יחד את האסטרטגיה המתאימה לך, נבין איפה הכסף שלך נמצא ואיך הוא יכול לעבוד עבורך.</p>
        <ul className="features-list">
          <li>תבין איפה בדיוק נמצא ההון שלך ולאן הוא הולך</li>
          <li>תוכנית פעולה מעשית שתוכל ליישם מיידית</li>
          <li>כלים פשוטים למעקב שזמינים גם מהספה</li>
          <li>ידע שישמש אותך שנים קדימה</li>
          <li>ניהול מושכל של התזרים הפנוי שלך להשקעות חדשות</li>
          <li>שקט נפשי מהעתיד הכלכלי</li>
        </ul>
      </section>

      {/* Who is it for? */}
      <section className="section section-bg2">
        <h2 className="section-title">למי מתאימה התוכנית?</h2>
        <ul className="audience-list">
          <li>למי שיש תזרים חיובי ורוצה לראות את הכסף שלו עובד חכם יותר</li>
          <li>למי שיש חסכונות ורוצה להגדיל את ההון במסלולים יציבים ומפוזרים</li>
          <li>למי ששוקל לרכוש דירה ורוצה להבין כמה הון עצמי באמת יש לו</li>
          <li>למי שמרגיש שהוא צריך סדר וכלים להתחיל להשקיע</li>
          <li>למי שמתלבט אם ואיך להשקיע בנדל"ן או שוק ההון</li>
          <li>למי שרוצה למקסם תשואה ולנהל סיכון בצורה אחראית</li>
          <li>למי שמבין שההשקעה הכי טובה היא היום</li>
        </ul>
      </section>

      {/* Personal Growth Tracks Section */}
      <section className="section section-bg3" style={{direction: 'rtl', textAlign: 'right'}}>
        <h2 className="section-title" style={{marginTop: '2rem'}}>💼 המסלולים האישיים – הדרך שלך לצמיחה כלכלית חכמה</h2>

        <h3 style={{color: '#22c55e', marginTop: '1.5rem'}}>✅ לא חסכת? לא שילמת</h3>
        <p>אני מתחייב לתוצאה: חיסכון ממשי או החזר מלא.<br/>בלי הפתעות, בלי התחייבויות מיותרות.</p>
        <div style={{background: '#f1f5f9', borderRadius: '1rem', padding: '1rem', margin: '1rem 0'}}>
          <strong>📌 דוגמה מהשטח:</strong><br/>
          לקוח עם ₪100,000 בקופת גמל להשקעה לילדים עבר בליווי שלי לתיק השקעות פרטי – ללא שינוי ברמת הסיכון או היעדים.<br/>
          <span style={{color: '#2563eb', fontWeight: 700, textDecoration: 'underline'}}>📉 התוצאה:</span> חיסכון של ₪70,000–₪100,000 לאורך 15–20 שנה –<br/>
          וזה עוד לפני שדיברנו על דמי ניהול, פיזור השקעות או שיפור תשואות.
        </div>

        <div className="tracks-flex column-layout">
          <div className="track-card selected" style={{marginBottom: '0'}}>
            <h3 style={{color: '#2563eb'}}>🧱 מסלול בסיס</h3>
            <div style={{height: '2px', width: '100%', background: '#93c5fd', borderRadius: '1px', margin: '0.1rem 0 1.2rem 0'}}></div>
            <strong>📦 מה כולל המסלול?</strong>
            <ul className="features-list">
              <li>היכרות עם עקרונות השיטה</li>
              <li>מיפוי פיננסי כולל של הנכסים, ההפקדות, הפנסיה והמשכנתאות</li>
              <li>זיהוי הזדמנויות לשיפור וחיסכון</li>
              <li>בניית אסטרטגיה אישית לצמיחה וניהול סיכונים</li>
              <li>דוח פעולה + כלים לניהול ומעקב עצמי</li>
            </ul>
            <p><strong>🧠 התוצאה:</strong><br/>שליטה מלאה על התמונה הפיננסית שלך + תוכנית אישית ומעשית לניהול ההון.</p>
            <p><strong>💳 עלות:</strong> ₪2,500<br/><span style={{fontSize: '0.95em', color: '#64748b'}}>*המחיר אינו כולל מע"מ*</span></p>
          </div>
          <div className="track-row">
            <div className="track-card">
              <h3 style={{color: '#2563eb'}}>📊 מסלול IRA – ניהול אישי של הפנסיה</h3>
              <div style={{height: '2px', width: '100%', background: '#93c5fd', borderRadius: '1px', margin: '0.5rem 0 1.2rem 0'}}></div>
              <strong>📦 מה כולל המסלול?</strong>
              <ul className="features-list">
                <li>מיפוי מוצרי הפנסיה הקיימים</li>
                <li>ביצוע מעבר ל־IRA</li>
                <li>בניית תיק השקעות מותאם גיל, יעד וסיכון</li>
                <li>כלים לבקרה, מעקב והשוואה</li>
              </ul>
              <p style={{fontSize: '0.98em'}}><em>💬 השירות ניתן על ידי יועץ פנסיוני מוסמך ובעל ניסיון מוכח.</em><br/>
              <span style={{color: '#64748b'}}>*מוצע רק לאחר השלמת מסלול הבסיס. המחיר משתנה בהתאם למורכבות.*</span></p>
            </div>
            <div className="track-card">
              <h3 style={{color: '#2563eb'}}>🏡 מסלול מינוף – מימון מחדש וניצול נכסים קיימים</h3>
              <div style={{height: '2px', width: '100%', background: '#93c5fd', borderRadius: '1px', margin: '0.5rem 0 1.2rem 0'}}></div>
              <strong>📦 מה כולל המסלול?</strong>
              <ul className="features-list">
                <li>מיפוי הנכסים וההון הזמין</li>
                <li>תכנון מימון לרכישת נכס נוסף או למחזור משכנתא</li>
                <li>ליווי אישי בתהליך מול הבנק</li>
                <li>השוואת מסלולים וליווי עד לביצוע</li>
              </ul>
              <p style={{fontSize: '0.98em'}}><em>💬 השירות ניתן על ידי יועץ משכנתאות מוסמך, בעל היכרות עמוקה עם המערכת הבנקאית.</em><br/>
              <span style={{color: '#64748b'}}>*מוצע רק לאחר השלמת מסלול הבסיס. המחיר מותאם אישית.*</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Fabio Mantel */}
      <section className="section section-bg4">
        <h2 className="section-title">מי אני</h2>
        <div className="about-me">
          <img src="/large-profile.png" alt="פביו מנטל" className="about-pic" style={{objectPosition: 'top'}} />
          <div>
            <p>נעים מאוד, אני פביו מנטל – מהנדס תוכנה, יזם ומשקיע.</p>
            <p>במהלך 15 שנותיי בהייטק ניהלתי קריירה טכנולוגית מצליחה, ובמקביל פיתחתי מערכת השקעות אישית שמבוססת על שיטה ברורה:</p>
            <div style={{margin: '1.2em 0', fontWeight: 800, fontSize: '1.35em', color: '#2563eb', letterSpacing: '0.01em'}}>
              אדריכלות פיננסית לצמיחה.
            </div>
            <p>השיטה הזו עזרה לי – ולאחר מכן לעשרות משפחות – לעשות סדר, להגדיל את ההון, ולבנות תוכנית כלכלית שמשרתת מטרות חיים.</p>
            <p>במהלך השנים צברתי ניסיון מגוון בניהול השקעות אישיות, בין היתר בתחומים הבאים:</p>
            <ul className="achievements-list">
              <li>תיק השקעות מגוון – עם תשואה שנתית ממוצעת של כ־10% (לפי ביצועים היסטוריים)</li>
              <li>מיקסום קרן השתלמות – עם תשואות ממוצעות של כ־12% בשנה</li>
              <li>השקעות נדל״ן בארה״ב – עם תשואות של כ־9% תוך שימוש במינוף מושכל</li>
              <li>חילוץ כספי פנסיה לטובת השקעות מניבות – תוך שמירה על הרכיבים הביטוחיים והמשך הפקדות רציפות מהמעסיק</li>
              <li>ליווי פיננסי אישי למשפחות – לניהול כולל של הון קיים וחדש</li>
            </ul>
            <p>אני לא יועץ השקעות ולא סוכן ביטוח –<br/>
            אני מציע תהליך אישי, שמחזיר לך את השליטה, נותן לך תמונה מלאה של ההון שלך,<br/>
            ומצייד אותך בתוכנית מעשית להמשך הדרך.</p>
            <p style={{fontSize: '0.95em', color: '#64748b', marginTop: '1.2em'}}>
              לתשומת לבך: אין בתהליך התחייבות לתשואות. הנתונים מבוססים על ניסיון אישי וביצועי עבר של השווקים בלבד.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-bg5">
        <h2 className="section-title">מה מספרים הלקוחות?</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"לא ידעתי בכלל כמה הון יש לי. פביו עזר לי לראות את התמונה המלאה ובנה איתי תוכנית שבזכותה השקענו בנכס מניב ראשון."</p>
            <span>— יובל, הגדיל את ההון דרך נדל"ן ממונף בישראל</span>
          </div>
          <div className="testimonial">
            <p>"פביו נתן לי סדר, כלים, וביטחון להתחיל להשקיע. היום יש לי קרן השתלמות מפוצלת נכון ותיק מדדים בפיזור רחב."</p>
            <span>— שירלי, מימשה את ההון הרדום בתשואה חכמה</span>
          </div>
          <div className="testimonial">
            <p>"עברנו ביחד תהליך קצר ויעיל שהניב חיסכון מיידי של אלפי שקלים כל חודש. ממליץ לכל מי שלא רוצה שהכסף שלו יעמוד במקום."</p>
            <span>— מתן, מינף תזרים חודשי חכם להשקעות</span>
          </div>
          <div className="testimonial">
            <p>"רכשתי דירה להשקעה בפרויקט עם השבחה עתידית, והתחלתי לבנות את תיק המניות הפרטי שלי עם הפקדה חודשית קבועה."</p>
            <span>— רם, התחיל להשקיע בשני אפיקים במקביל</span>
          </div>
          <div className="testimonial">
            <p>"התחלתי להשקיע במדדים רחבים בשוק ההון בתיק מגוון ומסודר, למדתי למנף נכון, חילצתי הון מהנכס שלי – ואני מרגיש בשליטה."</p>
            <span>— נדב, מהנדס תוכנה</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-bg6 contact-section" id="contact">
        <h2 className="section-title">מוכנים לצאת לדרך?</h2>
        <p className="section-desc">אני מזמין אתכם לפגישת היכרות חינמית, בה נבין יחד איך לסדר מחדש את ההון שלכם ולהתחיל לצמוח.<br />זה לא ייעוץ השקעות – זו אדריכלות פיננסית מותאמת אישית.</p>
        <div className="contact-options">
          <a href={`https://wa.me/972523631525?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <FaWhatsapp /> דברו איתי עכשיו בוואטסאפ
          </a>
          <span className="contact-or">או מלאו את הפרטים בטופס ונחזור אליכם בהקדם:</span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input type="text" placeholder="שם מלא" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} required />
          <input type="tel" placeholder="טלפון" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} required pattern="^05\d{8}$" title="נא להזין מספר טלפון ישראלי תקין (10 ספרות, מתחיל ב-05)." />
          <input type="email" placeholder="מייל" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
          <textarea placeholder="שאלה או הערה" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} rows={3} />
          {formError && <div className="form-error">{formError}</div>}
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'שולח...' : 'שליחת הטופס'}</button>
        </form>
      </section>

      {/* Footer with Socials */}
      <footer className="footer">
        <div className="footer-socials">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a> */}
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a> */}
          <a href="https://wa.me/972523631525" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
        <div className="footer-text">פביו מנטל | כל הזכויות שמורות | אדריכלות פיננסית לצמיחה</div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="גלול למעלה">↑</button>
      )}
    </div>
  );
}

export default App; 