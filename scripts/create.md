Create you generate sample json data, given these users/counselors:

<section id="people">
    <h2>People</h2>
    <input type="text" id="search-input" placeholder="Search counselors by name, specialty..." oninput="filterPeople()">
    <!-- Vertically Scrollable Container -->
    <div class="scroll-container" id="people-container">
        <div class="scroll-item" data-name="Cory D." data-specialty="relationship coaching">
            <img src="imgs/dd-coryd.jpg" alt="Cory D.">
            <div class="scroll-footer">
                <h3>Cory D.</h3>
                <p>Expert in relationship coaching.</p>
                <p>5 years of experience.</p>
                <p>Coach/Counselor.</p>
            </div>
        </div>
        <div class="scroll-item" data-name="David J." data-specialty="stress management">
            <img src="imgs/dd-davidj.jpg" alt="David J.">
            <div class="scroll-footer">
                <h3>David J.</h3>
                <p>Specializes in stress management.</p>
                <p>Author of two self-help books.</p>
                <p>International Speaker.</p>
            </div>
        </div>
        <div class="scroll-item" data-name="Ted S." data-specialty="career guidance">
            <img src="imgs/dd-teds.jpg" alt="Ted S.">
            <div class="scroll-footer">
                <h3>Ted S.</h3>
                <p>Focus on career guidance.</p>
                <p>Over 15 years in executive/leadership coaching.</p>
                <p>Executive.</p>
            </div>
        </div>
        <div class="scroll-item" data-name="Kari T." data-specialty="interpersonal dynamics">
            <img src="imgs/dd-karit.jpg" alt="Kari T.">
            <div class="scroll-footer">
                <h3>Kari T.</h3>
                <p>Focus on interpersonal dynamics.</p>
                <p>Over 14 years as a social worker.</p>
                <p>Counselor and Social Work</p>
            </div>
        </div>
        <div class="scroll-item" data-name="Alex M." data-specialty="career guidance">
            <img src="imgs/dd-alexm.jpg" alt="Alex M.">
            <div class="scroll-footer">
                <h3>Alex M.</h3>
                <p>Focus on career guidance.</p>
                <p>Over 10 years in coaching.</p>
                <p>CEO/Executive.</p>
            </div>
        </div>
    </div>
</section>

and then given this list of skills as json:

[
{
"name": "Male Counselor",
"label": "Man/Male Counselor"
},
{
"name": "Female Counselor",
"label": "Woman/Female Counselor"
},
{
"name": "Relationship Counseling",
"label": "Relationships"
},
{
"name": "Stress Management",
"label": "Stress Management"
},
{
"name": "Career Guidance",
"label": "Career Guidance"
},
{
"name": "Health & Wellness",
"label": "Health & Wellness"
},
{
"name": "Anxiety Counseling",
"label": "Anxiety"
},
{
"name": "Depression Counseling",
"label": "Depression"
},
{
"name": "Trauma Counseling",
"label": "Trauma"
},
{
"name": "Grief Counseling",
"label": "Grief & Loss"
},
{
"name": "Family Counseling",
"label": "Family Therapy"
},
{
"name": "Parenting Support",
"label": "Parenting Support"
},
{
"name": "Self-Esteem Counseling",
"label": "Self-Esteem"
},
{
"name": "Anger Management",
"label": "Anger Management"
},
{
"name": "Substance Abuse Counseling",
"label": "Substance Abuse"
},
{
"name": "PTSD Counseling",
"label": "PTSD"
},
{
"name": "Identity Counseling",
"label": "Identity Issues"
},
{
"name": "Body Image Counseling",
"label": "Body Image"
},
{
"name": "Life Transitions Counseling",
"label": "Life Transitions"
},
{
"name": "LGBTQIA+ Support",
"label": "LGBTQIA+ Support"
},
{
"name": "Eating Disorders Counseling",
"label": "Eating Disorders"
},
{
"name": "Addiction Counseling",
"label": "Addiction"
},
{
"name": "Mindfulness Therapy",
"label": "Mindfulness"
},
{
"name": "Sleep Issues Counseling",
"label": "Sleep Issues"
},
{
"name": "Couples Counseling",
"label": "Couples Therapy"
},
{
"name": "Chronic Pain Management",
"label": "Chronic Pain"
},
{
"name": "Social Skills Training",
"label": "Social Skills Training"
},
{
"name": "Conflict Resolution",
"label": "Conflict Resolution"
},
{
"name": "Assertiveness Training",
"label": "Assertiveness Training"
},
{
"name": "Guilt & Shame Counseling",
"label": "Guilt & Shame Counseling"
},
{
"name": "Sexual Health Counseling",
"label": "Sexual Health Counseling"
},
{
"name": "ADHD/ADD Support",
"label": "ADHD/ADD Support"
},
{
"name": "Autism Spectrum Counseling",
"label": "Autism Spectrum Counseling"
},
{
"name": "Performance Anxiety Counseling",
"label": "Performance Anxiety Counseling"
},
{
"name": "Spiritual Counseling",
"label": "Spiritual Counseling"
},
{
"name": "Divorce & Separation Counseling",
"label": "Divorce & Separation Counseling"
},
{
"name": "Executive Coaching",
"label": "Executive Coaching"
},
{
"name": "Leadership Development",
"label": "Leadership Development"
},
{
"name": "Time Management Coaching",
"label": "Time Management Coaching"
},
{
"name": "Public Speaking & Presentation Skills",
"label": "Public Speaking & Presentation Skills"
},
{
"name": "Conflict Resolution in the Workplace",
"label": "Conflict Resolution in the Workplace"
},
{
"name": "Work-Life Balance Coaching",
"label": "Work-Life Balance Coaching"
},
{
"name": "Career Advancement Strategies",
"label": "Career Advancement Strategies"
},
{
"name": "Professional Mentorship",
"label": "Professional Mentorship"
},
{
"name": "Team Building & Collaboration",
"label": "Team Building & Collaboration"
},
{
"name": "Organizational Change Management",
"label": "Organizational Change Management"
},
{
"name": "Fear of Flying Coaching",
"label": "Fear of Flying Coaching"
},
{
"name": "Phobia Desensitization",
"label": "Phobia Desensitization"
},
{
"name": "Confidence Coaching",
"label": "Confidence Coaching"
},
{
"name": "Resilience Training",
"label": "Resilience Training"
},
{
"name": "Fitness Accountability Coaching",
"label": "Fitness Accountability Coaching"
},
{
"name": "Motivation & Habit Formation",
"label": "Motivation & Habit Formation"
},
{
"name": "Peak Performance Coaching",
"label": "Peak Performance Coaching"
},
{
"name": "Fear of Public Speaking",
"label": "Fear of Public Speaking"
},
{
"name": "Stress Reduction Techniques",
"label": "Stress Reduction Techniques"
},
{
"name": "Healthy Aging & Longevity Coaching",
"label": "Healthy Aging & Longevity Coaching"
},
{
"name": "Weight Loss & Body Transformation Coaching",
"label": "Weight Loss & Body Transformation Coaching"
},
{
"name": "Overcoming Social Anxiety",
"label": "Overcoming Social Anxiety"
},
{
"name": "Leadership Resilience and Crisis Management",
"label": "Leadership Resilience and Crisis Management"
},
{
"name": "Decision-Making & Problem-Solving Skills",
"label": "Decision-Making & Problem-Solving Skills"
},
{
"name": "Entrepreneurial Mindset Coaching",
"label": "Entrepreneurial Mindset Coaching"
},
{
"name": "Personality Disorders",
"label": "Personality Disorders"
}
]



what I want to do is generate sample data for each user/counselor (there are 5 counselors and more than 60 skills).
Let's generate some json in this format:

{
  "tyoe": "counseling skill matrix",
  "counselors": [

    {"name": "ted s.", "ratings": [{"kind":"Family Counseling","rating": 3}, {"kind":"Personality Disorders", "rating": 4}]},
    {"name": "kari t.", "ratings": [{"kind":"Entrepreneurial Mindset Coaching","rating": 2}, {"kind":"Overcoming Social Anxiety", "rating": 5}]},
    {"name": "david j.", "ratings": [{"kind":"Fear of Public Speaking","rating": 4}, {"kind":"Peak Performance Coaching", "rating": 5}, {"kind":"Fitness Accountability Coaching", "rating": 5}]}

  ]

}

so clearly what we want to do is fill this out for all 5 counselors, and generate json, that has the complete list of skills and dummy/generate rating values for each counselor.
show me the complete generated json for the blob with type "counseling skill matrix"