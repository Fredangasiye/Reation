const GROWTH_MODULES = {
    anxious_attachment: {
        title: "Anxious Attachment",
        subtitle: "Primal Panic & Safety",
        point_1: "This is a state of 'primal panic' where a person feels chronically unsafe unless they are in constant, intense connection with their partner.",
        pulse_check: [
            "Clinging harder when a partner asks for space",
            "Interpreting a partner's hobby as a danger cue",
            "Feeling invisible if a partner is distracted",
            "Believing closeness won't happen without pushing",
            "High heart rate when partner is distant"
        ],
        root_cause: "Inconsistent caregiving where needs were sometimes met and sometimes ignored, leaving the child hyper-focused on the parent's mood.",
        belief_buster: {
            belief: "I am only safe if I am in total fusion with my partner.",
            reframe: "Safety comes from my own internal stability and God's constant presence, not a partner's proximity."
        },
        daily_quest: "The 2-Hour Pause: When you feel the urge to text or check in, wait 2 hours while practicing calm breathing.",
        spiritual: "You are never truly alone. Your identity is hidden in Christ, who is the same yesterday, today, and forever. (Psalm 27:10)",
        roadmap: [
            "Week 1: Awareness - Mapping 'Attachment Cues'",
            "Week 2: Challenging the 'Fatal Flaw' Belief",
            "Week 3: The 2-Hour Pause Implementation",
            "Week 4: Secure Attachment Visualization"
        ]
    },
    avoidant_attachment: {
        title: "Avoidant Attachment",
        subtitle: "The Psychic Shield",
        point_1: "A 'dealing but not feeling' strategy where a person disconnects from their own emotions to stay 'safe' from others.",
        pulse_check: [
            "Viewing closeness as suffocation",
            "Seeking to 'escape the room' during talks",
            "Using reason/logic to flee emotional needs",
            "Feeling a 'cool exterior' while internal stress is high",
            "Hiding behind a 'psychic shield' of autonomy"
        ],
        root_cause: "Caregivers who were intrusive or disliked physical touch, causing the child to use silence as their only boundary.",
        belief_buster: {
            belief: "Dependence is weakness; I must be my own island.",
            reframe: "Vulnerability is the only path to true strength and connection."
        },
        daily_quest: "The Emotional Share: Share one raw, non-logical feeling with your partner today without explaining it away.",
        spiritual: "God created us for community. To love is to be vulnerable, just as Christ made Himself vulnerable for us.",
        roadmap: [
            "Week 1: Noticing the 'Psychic Shield'",
            "Week 2: Naming Body Sensations (Interoception)",
            "Week 3: Practicing 'The Lean In'",
            "Week 4: Integrating Autonomy and Connection"
        ]
    },
    communication_problems: {
        title: "Communication Problems",
        subtitle: "Demon Dialogues to Connection",
        point_1: "The habitual use of 'Demon Dialogues' (blame, contempt, and withdrawal) rather than safe, attuned connection.",
        pulse_check: [
            "Using 'Harsh Start-ups' - criticism or blame",
            "Rolling eyes or using sarcasm",
            "Missing a partner's 'bid' for connection",
            "Stonewalling or shutting down",
            "Failing to hear 'repair attempts'"
        ],
        root_cause: "Growing up in a family where the 'rules of the game' were unfair or where honest expression was met with malevolence.",
        belief_buster: {
            belief: "I must win the argument to be heard.",
            reframe: "The relationship wins when we stop trying to find the 'bad guy'."
        },
        daily_quest: "The Soft Start: Use an 'I' statement to express a need today without using the word 'You'.",
        spiritual: "Let your speech always be gracious, seasoned with salt. (Colossians 4:6)",
        roadmap: [
            "Week 1: Auditing the 'Demon Dialogue'",
            "Week 2: Practicing 'I' Statements",
            "Week 3: Quick Repair Exercises",
            "Week 4: Creating a Shared Vision"
        ]
    },
    emotional_regulation: {
        title: "Emotional Regulation",
        subtitle: "Calming the Internal Storm",
        point_1: "The inability to keep one's internal stress-response system in balance, leading to overreactivity or numbness.",
        pulse_check: [
            "Snapping for 'no reason'",
            "Heart rate over 100 bpm during neutral talks",
            "Using food/screens to 'numb out' stress",
            "Intellectualizing emotions instead of feeling them",
            "Apologizing for crying or having feelings"
        ],
        root_cause: "Failure to internalize a soothing 'parental voice', leaving the individual without the neural tools to self-calm.",
        belief_buster: {
            belief: "My feelings are a sign of being out of control.",
            reframe: "Feelings are just messengers; they don't have to drive the car."
        },
        daily_quest: "The Vagal Brake: Practice 4-7-8 breathing (inhale 4, hold 7, exhale 8) for 5 minutes when triggered.",
        spiritual: "The fruit of the Spirit is... self-control. (Galatians 5:22-23)",
        roadmap: [
            "Week 1: Identifying 'Flooding' Triggers",
            "Week 2: Developing the 'Parental Voice'",
            "Week 3: Daily Vagal Brake Practice",
            "Week 4: Emotional Sovereignty"
        ]
    },
    trust_issues: {
        title: "Trust Issues",
        subtitle: "Safety in Vulnerability",
        point_1: "A chronic inability to feel safe with others, often believing that 'betrayal is inevitable'.",
        pulse_check: [
            "Opening 'relationship exits' (work, screens)",
            "Hiding small facts to maintain safety",
            "Assuming malevolent motives",
            "Checking partner's messages secretly",
            "Distancing at the first sign of risk"
        ],
        root_cause: "Trust broken when the 'sacred social contract' was violated, causing a person to prioritize protection over intimacy.",
        belief_buster: {
            belief: "If I let my guard down, I will be destroyed.",
            reframe: "Real safety is built through consistent, observable repair, not isolation."
        },
        daily_quest: "The Tiny Truth: Share one small, slightly uncomfortable truth that you would usually keep hidden.",
        spiritual: "Commit your way to the Lord; trust in him. (Psalm 37:5)",
        roadmap: [
            "Week 1: Closing the 'Exits'",
            "Week 2: The Transparency Audit",
            "Week 3: Building Small Wins",
            "Week 4: The Sacred Social Contract"
        ]
    },
    trauma: {
        title: "Trauma Healing",
        subtitle: "Rewiring the Smoke Detector",
        point_1: "A fundamental reorganization of the nervous system that makes the world feel pervasively dangerous.",
        pulse_check: [
            "Hypervigilance - scanning for threats",
            "Dissociating or 'going blank' during stress",
            "Reacting to neutral comments with 'flooding'",
            "Chronic sense of impending doom",
            "Difficulty maintaining stable trust"
        ],
        root_cause: "Events that overwhelmed the capacity to cope, plunging the individual into fear and helplessness.",
        belief_buster: {
            belief: "The world is fundamentally unsafe and I am alone.",
            reframe: "My brain is trying to protect me from the past, but I am safe in the present."
        },
        daily_quest: "Orienting: Name 5 things you can see, 4 you can touch, 3 you can hear to return to the present.",
        spiritual: "God is our refuge and strength, a very present help in trouble. (Psalm 46:1)",
        roadmap: [
            "Week 1: Safety Planning",
            "Week 2: Grounding and Orienting",
            "Week 3: Titrating the Memories",
            "Week 4: Post-Traumatic Growth"
        ]
    },
    father_wounds: {
        title: "Father Wounds",
        subtitle: "Identity & Blessing",
        point_1: "A 'wound in the soul' occurring when one doesn't receive the necessary masculine blessing and protection.",
        pulse_check: [
            "Difficulty trusting men in authority",
            "Feeling like a 'boy pretending to be a man'",
            "Compulsive need for external validation",
            "False stoicism or hiding a wounded heart",
            "View of self as a 'disappointment'"
        ],
        root_cause: "A father who was physically absent, emotionally silent, workaholic, or verbally abusive.",
        belief_buster: {
            belief: "My worth is based on my performance and strength.",
            reframe: "I am a beloved child of God, and His blessing is my permanent identity."
        },
        daily_quest: "Mirror Work: Look in the mirror and say, 'I am enough as I am,' and notice any resistance.",
        spiritual: "See what kind of love the Father has given to us, that we should be called children of God. (1 John 3:1)",
        roadmap: [
            "Week 1: Identifying the 'Absent King'",
            "Week 2: Grieving the Missing Blessing",
            "Week 3: Forgiveness and Release",
            "Week 4: Stepping into Generative Adulthood"
        ]
    },
    mother_wounds: {
        title: "Mother Wounds",
        subtitle: "Boundaries & Autonomy",
        point_1: "Non-satisfaction of emotional needs by a parent who used the child for their own emotional stability.",
        pulse_check: [
            "Feeling accountable for others' happiness",
            "Silencing your needs to keep the peace",
            "Fear of being 'smothered' or trapped",
            "Believing your independence is a betrayal",
            "Doing all the emotional work in relationships"
        ],
        root_cause: "A parent who was 'Oedipal' (smothering), rejective, or too fragile to handle the child's independent growth.",
        belief_buster: {
            belief: "My boundaries are a threat to love.",
            reframe: "The most loving thing I can do is be a separate, healthy individual."
        },
        daily_quest: "The Small 'No': Say 'no' to one small request today that you don't actually want to do.",
        spiritual: "For God did not give us a spirit of fear, but of power and love and self-control. (2 Timothy 1:7)",
        roadmap: [
            "Week 1: Mapping the 'Enmeshment'",
            "Week 2: The Sovereignty Audit",
            "Week 3: Practicing 'The Healthy No'",
            "Week 4: Differentiated Connection"
        ]
    },
    boundaries: {
        title: "Healthy Boundaries",
        subtitle: "Protecting the Sacred Self",
        point_1: "A lack of internal 'structure' that prevents a person from knowing where they end and others begin.",
        pulse_check: [
            "Saying 'yes' when your gut screams 'no'",
            "Over-functioning for irresponsible partners",
            "Apologizing to hurtful parties to stay connected",
            "Walking on eggshells to avoid arguments",
            "Feeling responsible for your partner's mood"
        ],
        root_cause: "Parents who were passive or intrusive, preventing the child from developing their own 'no'.",
        belief_buster: {
            belief: "If I set a limit, I will lose love.",
            reframe: "Boundaries define where I end and you begin; they are the walls of the garden of love."
        },
        daily_quest: "The Fence Post: Define one clear boundary today regarding your time or emotional energy.",
        spiritual: "Let your 'Yes' be 'Yes' and your 'No' be 'No'. (Matthew 5:37)",
        roadmap: [
            "Week 1: The 'Yes/No' Audit",
            "Week 2: Locating the 'Gut Voice'",
            "Week 3: Setting the First Limit",
            "Week 4: Boundary Sovereignty"
        ]
    },
    low_self_worth: {
        title: "Self-Worth Restoration",
        subtitle: "From Garbage to Gold",
        point_1: "Feeling that you are 'garbage, worthless, or rejected' at your core, regardless of external success.",
        pulse_check: [
            "Comparing yourself and finding yourself 'lacking'",
            "Internal critical voice points out every flaw",
            "Minimizing successes as 'meaningless' or fraud",
            "Feeling you have no right to complain",
            "Excessive people-pleasing to earn belonging"
        ],
        root_cause: "Self-directed anger or disgust internalized from a childhood where feelings were seen as failings.",
        belief_buster: {
            belief: "I am a mistake and a fraud.",
            reframe: "I am fearfully and wonderfully made, and my value is inherent, not earned."
        },
        daily_quest: "The Win Log: Write down 3 small things you did well today and sit with the feeling for 30 seconds.",
        spiritual: "For we are his workmanship, created in Christ Jesus for good works. (Ephesians 2:10)",
        roadmap: [
            "Week 1: Identifying the 'Internal Critic'",
            "Week 2: The Inherent Worth Audit",
            "Week 3: Practicing Self-Compassion",
            "Week 4: The New Identity Vote"
        ]
    },
    gender_development: {
        title: "Maturity & Archetypes",
        subtitle: "Moving Beyond Boy/Girl Psychology",
        point_1: "Fixation at immature levels of development, leading to 'High Chair Tyrant' or 'Weakling Prince' behaviors.",
        pulse_check: [
            "Avoiding adult responsibilities for 'fun'",
            "Living out a 'pose' to hide worthlessness",
            "Using manipulation (Trickster) to get your way",
            "Refusing to yield or accept influence",
            "Performing for adulation rather than mission"
        ],
        root_cause: "Lack of ritual processes or initiations to help transition into generative adulthood.",
        belief_buster: {
            belief: "I am only safe if I am at the center of the universe.",
            reframe: "Real power is found in service and submission to a higher mission."
        },
        daily_quest: "The Mission Move: Do one task today purely because it serves your long-term mission, not your mood.",
        spiritual: "When I was a child, I spoke like a child... When I became a man, I gave up childish ways. (1 Corinthians 13:11)",
        roadmap: [
            "Week 1: Auditing the 'Archetype Shadows'",
            "Week 2: Finding the Mission",
            "Week 3: The Initiation Exercise",
            "Week 4: Generative Adulthood"
        ]
    }
};
