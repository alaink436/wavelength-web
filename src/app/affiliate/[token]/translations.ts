// Translations for the affiliate setup form.
// Falls a language is not yet translated, EN is used as fallback.
// Country labels stay in DE for now (display-only, optional V2).

export type Lang = "de" | "en" | "fr" | "es" | "it" | "nl" | "pt" | "pl";

export const SUPPORTED_LANGS: Lang[] = ["de", "en", "fr", "es", "it", "nl", "pt", "pl"];

export function isLang(s: string | null | undefined): s is Lang {
  return !!s && (SUPPORTED_LANGS as string[]).includes(s);
}

export interface T {
  expired_title: string;
  expired_body: string;
  done_title: string;
  done_body: string;
  done_promo_label: string;
  done_share_explainer: string; // {sharePct}, {shareMonths}
  done_tracking_label: string;
  tag: string; // appears as small chip top-of-card
  welcome_title: string; // {handle}
  welcome_body: string;
  field_name_label: string;
  field_name_placeholder: string;
  field_country_label: string;
  field_payout_method_label: string;
  field_iban_label: string;
  field_email_label_paypal: string;
  field_email_label_wise: string;
  field_email_placeholder: string;
  field_tax_label: string;
  tax_kleinunternehmer: string;
  tax_regelbesteuert: string;
  checkbox_invoice_capable: string;
  err_name_required: string;
  err_iban_required: string;
  err_email_required: string;
  err_generic: string;
  submit_idle: string;
  submit_busy: string;
  consent: string; // {sharePct}, {shareMonths}
  contact_help: string; // shown on expired/done pages, contains email
}

function tpl(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

const de: T = {
  expired_title: "Link abgelaufen",
  expired_body: "Dieser Setup-Link funktioniert nicht mehr. Schreib mir kurz an {email} und ich schick dir einen neuen.",
  done_title: "Du bist drin.",
  done_body: "Dein Promo-Code für deine Audience:",
  done_promo_label: "Promo-Code",
  done_share_explainer: "Deine Audience bekommt 20% Rabatt auf den ersten Premium-Monat, du bekommst {sharePct}% Lifetime-Share für {shareMonths} Monate auf jeden Sub, der über deinen Code kommt. Auszahlung jeden Monatsanfang.",
  done_tracking_label: "Dein Tracking-Link",
  tag: "Affiliate",
  welcome_title: "Willkommen, @{handle}.",
  welcome_body: "Letzte Daten für die Auszahlung, dann bist du drin. Dauert eine Minute.",
  field_name_label: "Dein Name (für Rechnungen)",
  field_name_placeholder: "Marie Schmidt",
  field_country_label: "Land",
  field_payout_method_label: "Auszahlungs-Methode",
  field_iban_label: "IBAN",
  field_email_label_paypal: "PayPal-Email",
  field_email_label_wise: "Wise-Email",
  field_email_placeholder: "marie@example.com",
  field_tax_label: "Steuerlicher Status",
  tax_kleinunternehmer: "Kleinunternehmer (kein USt-Ausweis)",
  tax_regelbesteuert: "Regelbesteuert (mit USt)",
  checkbox_invoice_capable: "Ich kann monatlich eine Rechnung schreiben",
  err_name_required: "Bitte gib einen Namen an.",
  err_iban_required: "Für SEPA brauche ich deine IBAN.",
  err_email_required: "Bitte gib die Auszahlungs-Email an.",
  err_generic: "Etwas ging schief. Versuch's nochmal.",
  submit_idle: "Account aktivieren",
  submit_busy: "Speichere…",
  consent: "Mit dem Klick bestätigst du {sharePct}% Lifetime-Revenue-Share für {shareMonths} Monate pro Sub. Auszahlung monatlich.",
  contact_help: "Schreib mir an {email}.",
};

const en: T = {
  expired_title: "Link expired",
  expired_body: "This setup link no longer works. Drop me a line at {email} and I'll send a fresh one.",
  done_title: "You're in.",
  done_body: "Your promo code for your audience:",
  done_promo_label: "Promo code",
  done_share_explainer: "Your audience gets 20% off their first Premium month, you get {sharePct}% lifetime share for {shareMonths} months on every sub that comes through your code. Payout the first of each month.",
  done_tracking_label: "Your tracking link",
  tag: "Affiliate",
  welcome_title: "Welcome, @{handle}.",
  welcome_body: "Last bits for the payout, then you're set. Takes a minute.",
  field_name_label: "Your name (for invoices)",
  field_name_placeholder: "Marie Smith",
  field_country_label: "Country",
  field_payout_method_label: "Payout method",
  field_iban_label: "IBAN",
  field_email_label_paypal: "PayPal email",
  field_email_label_wise: "Wise email",
  field_email_placeholder: "marie@example.com",
  field_tax_label: "Tax status",
  tax_kleinunternehmer: "Small business (no VAT)",
  tax_regelbesteuert: "Standard (with VAT)",
  checkbox_invoice_capable: "I can issue monthly invoices",
  err_name_required: "Please enter a name.",
  err_iban_required: "SEPA needs your IBAN.",
  err_email_required: "Please enter the payout email.",
  err_generic: "Something went wrong. Try again.",
  submit_idle: "Activate account",
  submit_busy: "Saving…",
  consent: "By clicking you confirm {sharePct}% lifetime revenue share for {shareMonths} months per sub. Monthly payout.",
  contact_help: "Drop me a line at {email}.",
};

const fr: T = {
  ...en,
  expired_title: "Lien expiré",
  expired_body: "Ce lien de configuration ne fonctionne plus. Écris-moi à {email} et je t'en renvoie un.",
  done_title: "C'est bon.",
  done_body: "Ton code promo pour ton audience :",
  done_promo_label: "Code promo",
  done_tracking_label: "Ton lien de suivi",
  tag: "Affilié",
  welcome_title: "Bienvenue, @{handle}.",
  welcome_body: "Dernières infos pour le paiement, et c'est parti. Une minute.",
  field_name_label: "Ton nom (pour les factures)",
  field_country_label: "Pays",
  field_payout_method_label: "Méthode de paiement",
  field_email_label_paypal: "Email PayPal",
  field_email_label_wise: "Email Wise",
  field_tax_label: "Statut fiscal",
  tax_kleinunternehmer: "Micro-entrepreneur (sans TVA)",
  tax_regelbesteuert: "Standard (avec TVA)",
  checkbox_invoice_capable: "Je peux émettre des factures mensuelles",
  err_name_required: "Indique un nom s'il te plaît.",
  err_iban_required: "Pour SEPA il me faut ton IBAN.",
  err_email_required: "Indique l'email de paiement s'il te plaît.",
  err_generic: "Quelque chose a échoué. Réessaie.",
  submit_idle: "Activer le compte",
  submit_busy: "Sauvegarde…",
  consent: "En cliquant tu confirmes {sharePct}% de revenu à vie pendant {shareMonths} mois par abonnement. Paiement mensuel.",
};

const es: T = {
  ...en,
  expired_title: "Enlace caducado",
  expired_body: "Este enlace ya no funciona. Escríbeme a {email} y te mando uno nuevo.",
  done_title: "Listo.",
  done_body: "Tu código promocional para tu audiencia:",
  done_promo_label: "Código promo",
  done_tracking_label: "Tu enlace de seguimiento",
  tag: "Afiliado",
  welcome_title: "Bienvenida, @{handle}.",
  welcome_body: "Últimos datos para el pago y ya estás dentro. Tarda un minuto.",
  field_name_label: "Tu nombre (para facturas)",
  field_country_label: "País",
  field_payout_method_label: "Método de pago",
  field_email_label_paypal: "Email de PayPal",
  field_email_label_wise: "Email de Wise",
  field_tax_label: "Estado fiscal",
  tax_kleinunternehmer: "Autónomo (sin IVA)",
  tax_regelbesteuert: "Régimen general (con IVA)",
  checkbox_invoice_capable: "Puedo emitir facturas mensuales",
  err_name_required: "Pon un nombre por favor.",
  err_iban_required: "Para SEPA necesito tu IBAN.",
  err_email_required: "Pon el email de pago por favor.",
  err_generic: "Algo falló. Inténtalo de nuevo.",
  submit_idle: "Activar cuenta",
  submit_busy: "Guardando…",
  consent: "Al hacer clic confirmas {sharePct}% de ingresos de por vida durante {shareMonths} meses por suscripción. Pago mensual.",
};

const it: T = {
  ...en,
  expired_title: "Link scaduto",
  expired_body: "Questo link non funziona più. Scrivimi a {email} e te ne mando uno nuovo.",
  done_title: "Sei dentro.",
  done_body: "Il tuo codice promo per il tuo pubblico:",
  done_promo_label: "Codice promo",
  done_tracking_label: "Il tuo link di tracking",
  tag: "Affiliato",
  welcome_title: "Benvenuta, @{handle}.",
  welcome_body: "Ultimi dati per il pagamento e sei dentro. Ci vuole un minuto.",
  field_name_label: "Il tuo nome (per le fatture)",
  field_country_label: "Paese",
  field_payout_method_label: "Metodo di pagamento",
  field_email_label_paypal: "Email PayPal",
  field_email_label_wise: "Email Wise",
  field_tax_label: "Stato fiscale",
  tax_kleinunternehmer: "Regime forfettario (senza IVA)",
  tax_regelbesteuert: "Regime ordinario (con IVA)",
  checkbox_invoice_capable: "Posso emettere fatture mensili",
  err_name_required: "Inserisci un nome per favore.",
  err_iban_required: "Per SEPA mi serve il tuo IBAN.",
  err_email_required: "Inserisci l'email di pagamento per favore.",
  err_generic: "Qualcosa è andato storto. Riprova.",
  submit_idle: "Attiva account",
  submit_busy: "Salvataggio…",
  consent: "Cliccando confermi il {sharePct}% di revenue share a vita per {shareMonths} mesi per ogni sub. Pagamento mensile.",
};

const nl: T = {
  ...en,
  expired_title: "Link verlopen",
  expired_body: "Deze setup-link werkt niet meer. Stuur me een mail op {email} en ik stuur je een nieuwe.",
  done_title: "Je bent erbij.",
  done_body: "Jouw promocode voor je audience:",
  done_promo_label: "Promocode",
  done_tracking_label: "Jouw tracking-link",
  tag: "Affiliate",
  welcome_title: "Welkom, @{handle}.",
  welcome_body: "Laatste gegevens voor de uitbetaling, dan ben je klaar. Duurt een minuutje.",
  field_name_label: "Je naam (voor facturen)",
  field_country_label: "Land",
  field_payout_method_label: "Uitbetalingsmethode",
  field_email_label_paypal: "PayPal-email",
  field_email_label_wise: "Wise-email",
  field_tax_label: "Belastingstatus",
  tax_kleinunternehmer: "Kleine ondernemer (geen btw)",
  tax_regelbesteuert: "Regulier (met btw)",
  checkbox_invoice_capable: "Ik kan maandelijks een factuur opstellen",
  err_name_required: "Vul een naam in alsjeblieft.",
  err_iban_required: "Voor SEPA heb ik je IBAN nodig.",
  err_email_required: "Vul de uitbetalingsemail in alsjeblieft.",
  err_generic: "Er ging iets mis. Probeer het opnieuw.",
  submit_idle: "Account activeren",
  submit_busy: "Bezig met opslaan…",
  consent: "Door te klikken bevestig je {sharePct}% lifetime revenue share gedurende {shareMonths} maanden per sub. Maandelijkse uitbetaling.",
};

const pt: T = { ...en };
const pl: T = { ...en };

const ALL: Record<Lang, T> = { de, en, fr, es, it, nl, pt, pl };

export function t(lang: Lang | string | null | undefined): T {
  if (isLang(lang)) return ALL[lang];
  return de; // default fallback
}

export function fill(s: string, vars: Record<string, string | number>): string {
  return tpl(s, vars);
}
