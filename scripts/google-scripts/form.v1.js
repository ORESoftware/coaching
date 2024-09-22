function createFormFromBubbles() {
  // Create a new Google Form
  var form = FormApp.create('Counseling Services Provider Form');
  
  // Add 3 initial questions for Name, Phone, and Email
  // Name question
  var nameItem = form.addTextItem();
  nameItem.setTitle("What's your name?")
    .setRequired(true);
  
  // Phone number question with validation
  var phoneItem = form.addTextItem();
  phoneItem.setTitle("What's your phone number?")
    .setHelpText("Please enter a valid phone number")
    .setRequired(true);
  
  var phoneValidation = FormApp.createTextValidation()
    .setHelpText("Please enter a valid phone number (e.g., 123-456-7890)")
    .requireTextMatchesPattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')
    .build();
  
  phoneItem.setValidation(phoneValidation);
  
  // Email question with validation
  var emailItem = form.addTextItem();
  emailItem.setTitle("What's your email?")
    .setHelpText("Please enter a valid email address")
    .setRequired(true);
  
  var emailValidation = FormApp.createTextValidation()
    .setHelpText("Please enter a valid email address")
    .requireTextIsEmail()
    .build();
  
  emailItem.setValidation(emailValidation);
  
  // JSON data extracted from the HTML-like input
  var bubbleData = [
    {name: "Male Counselor", label: "Man/Male Counselor"},
    {name: "Female Counselor", label: "Woman/Female Counselor"},
    {name: "Relationship Counseling", label: "Relationships"},
    {name: "Stress Management", label: "Stress Management"},
    {name: "Career Guidance", label: "Career Guidance"},
    {name: "Health & Wellness", label: "Health & Wellness"},
    {name: "Anxiety Counseling", label: "Anxiety"},
    {name: "Depression Counseling", label: "Depression"},
    {name: "Trauma Counseling", label: "Trauma"},
    {name: "Grief Counseling", label: "Grief & Loss"},
    {name: "Family Counseling", label: "Family Therapy"},
    {name: "Parenting Support", label: "Parenting Support"},
    {name: "Self-Esteem Counseling", label: "Self-Esteem"},
    {name: "Anger Management", label: "Anger Management"},
    {name: "Substance Abuse Counseling", label: "Substance Abuse"},
    {name: "PTSD Counseling", label: "PTSD"},
    {name: "Identity Counseling", label: "Identity Issues"},
    {name: "Body Image Counseling", label: "Body Image"},
    {name: "Life Transitions Counseling", label: "Life Transitions"},
    {name: "LGBTQIA+ Support", label: "LGBTQIA+ Support"},
    {name: "Eating Disorders Counseling", label: "Eating Disorders"},
    {name: "Addiction Counseling", label: "Addiction"},
    {name: "Mindfulness Therapy", label: "Mindfulness"},
    {name: "Sleep Issues Counseling", label: "Sleep Issues"},
    {name: "Couples Counseling", label: "Couples Therapy"},
    {name: "Chronic Pain Management", label: "Chronic Pain"},
    {name: "Social Skills Training", label: "Social Skills Training"},
    {name: "Conflict Resolution", label: "Conflict Resolution"},
    {name: "Assertiveness Training", label: "Assertiveness Training"},
    {name: "Guilt & Shame Counseling", label: "Guilt & Shame Counseling"},
    {name: "Sexual Health Counseling", label: "Sexual Health Counseling"},
    {name: "ADHD/ADD Support", label: "ADHD/ADD Support"},
    {name: "Autism Spectrum Counseling", label: "Autism Spectrum Counseling"},
    {name: "Performance Anxiety Counseling", label: "Performance Anxiety Counseling"},
    {name: "Spiritual Counseling", label: "Spiritual Counseling"},
    {name: "Divorce & Separation Counseling", label: "Divorce & Separation Counseling"},
    {name: "Executive Coaching", label: "Executive Coaching"},
    {name: "Leadership Development", label: "Leadership Development"},
    {name: "Time Management Coaching", label: "Time Management Coaching"},
    {name: "Public Speaking & Presentation Skills", label: "Public Speaking & Presentation Skills"},
    {name: "Conflict Resolution in the Workplace", label: "Conflict Resolution in the Workplace"},
    {name: "Work-Life Balance Coaching", label: "Work-Life Balance Coaching"},
    {name: "Career Advancement Strategies", label: "Career Advancement Strategies"},
    {name: "Professional Mentorship", label: "Professional Mentorship"},
    {name: "Team Building & Collaboration", label: "Team Building & Collaboration"},
    {name: "Organizational Change Management", label: "Organizational Change Management"},
    {name: "Fear of Flying Coaching", label: "Fear of Flying Coaching"},
    {name: "Phobia Desensitization", label: "Phobia Desensitization"},
    {name: "Confidence Coaching", label: "Confidence Coaching"},
    {name: "Resilience Training", label: "Resilience Training"},
    {name: "Fitness Accountability Coaching", label: "Fitness Accountability Coaching"},
    {name: "Motivation & Habit Formation", label: "Motivation & Habit Formation"},
    {name: "Peak Performance Coaching", label: "Peak Performance Coaching"},
    {name: "Fear of Public Speaking", label: "Fear of Public Speaking"},
    {name: "Stress Reduction Techniques", label: "Stress Reduction Techniques"},
    {name: "Healthy Aging & Longevity Coaching", label: "Healthy Aging & Longevity Coaching"},
    {name: "Weight Loss & Body Transformation Coaching", label: "Weight Loss & Body Transformation Coaching"},
    {name: "Overcoming Social Anxiety", label: "Overcoming Social Anxiety"},
    {name: "Leadership Resilience and Crisis Management", label: "Leadership Resilience and Crisis Management"},
    {name: "Decision-Making & Problem-Solving Skills", label: "Decision-Making & Problem-Solving Skills"},
    {name: "Entrepreneurial Mindset Coaching", label: "Entrepreneurial Mindset Coaching"}
  ];
  
  // Loop through the bubble data to add questions that expect integer responses (1-5)
  bubbleData.forEach(function(bubble) {
    var item = form.addTextItem();
    // Format the question with X as bold
    item.setTitle(`How would you rate your ability to provide services for **${bubble.label}**? (1-5)`)
      .setHelpText("Please enter a number between 1 and 5")
      .setRequired(true);
    
    // Add validation to ensure responses are integers between 1 and 5
    var textValidation = FormApp.createTextValidation()
      .setHelpText('Please enter a valid number between 1 and 5')
      .requireNumberBetween(1, 5)
      .build();
    
    item.setValidation(textValidation);
  });
  
  Logger.log('Form created: ' + form.getEditUrl());
}
