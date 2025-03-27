// --- START OF FINAL SCRIPT.JS with Ask AI ---
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const USER_PROFILE_KEY = 'currentUser';
    const ACTIVITY_FEED_KEY = 'activityFeed';

    const defaultUser = {
        id: `simulatedUser_${Date.now()}`, name: 'Guest User', year: null, college: null, donations: 0, level: 'New', profilePictureFilename: null, profilePicturePreview: null
    };

    const fakeSeniors = [
        { id: 's1', name: 'Deependra Pal', year: '2nd Year', college: 'BBDNIIT', skills: ['Web Dev', 'React', 'Node.js', 'MongoDB'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/FFA500/FFFFFF?text=DP' },
        { id: 's2', name: 'Kritika', year: '2nd Year', college: 'BBDNIIT', skills: ['Data Science', 'Python', 'ML'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/FF6347/FFFFFF?text=K' },
        { id: 's3', name: 'Ayush Pandey', year: '2nd Year', college: 'BBDNIIT', skills: ['UI/UX Design', 'Figma'], linkedinUrl: '#', picUrl: null },
        { id: 's4', name: 'Ayush kr. Pandey', year: '2nd Year', college: 'BBDNIIT', skills: ['Cloud', 'AWS', 'DevOps', 'Terraform'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/4682B4/FFFFFF?text=AP' },
        { id: 's5', name: 'Sneha Gupta', year: 'Alumni (2023)', college: 'IIT Bombay', skills: ['Java', 'Spring Boot', 'Android', 'Kotlin'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/3CB371/FFFFFF?text=SG' },
        { id: 's6', name: 'Vikram Patel', year: '4th Year', college: 'IIT Bombay', skills: ['C++', 'Algorithms', 'Competitive Programming'], linkedinUrl: '#', picUrl: null },
        { id: 's7', name: 'Neha Reddy', year: '3rd Year', college: 'IIT Bombay', skills: ['Cyber Security', 'Networking', 'Penetration Testing'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/DB7093/FFFFFF?text=NR' },
        { id: 's8', name: 'Siddharth Jain', year: 'Alumni (2021)', college: 'IIT Delhi', skills: ['AI', 'Deep Learning', 'TensorFlow', 'PyTorch'], linkedinUrl: '#', picUrl: null },
        { id: 's9', name: 'Kavya Menon', year: '4th Year', college: 'IIT Bombay', skills: ['Blockchain', 'Solidity', 'Cryptography'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/BA55D3/FFFFFF?text=KM' },
        { id: 's10', name: 'Arjun Rao', year: '3rd Year', college: 'IIT Bombay', skills: ['iOS Dev', 'Swift', 'Objective-C'], linkedinUrl: '#', picUrl: null },
        { id: 's11', name: 'Meera Iyer', year: 'Alumni (2023)', college: 'IIT Bombay', skills: ['Product Management', 'Agile', 'Market Analysis'], linkedinUrl: '#', picUrl: null },
        { id: 's12', name: 'Harsh Singh', year: '4th Year', college: 'IIT Madras', skills: ['Robotics', 'ROS', 'Control Systems'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/FFD700/000000?text=HS' },
        { id: 's13', name: 'Diya Chatterjee', year: '3rd Year', college: 'IIT Bombay', skills: ['Graphic Design', 'Illustrator', 'Photoshop'], linkedinUrl: '#', picUrl: null },
        { id: 's14', name: 'Rahul Nair', year: 'Alumni (2022)', college: 'IIT Bombay', skills: ['Finance', 'Quant Analysis', 'Trading Systems'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/20B2AA/FFFFFF?text=RN' },
        { id: 's15', name: 'Ishaan Khan', year: '4th Year', college: 'IIT Bombay', skills: ['Game Dev', 'Unity', 'C#'], linkedinUrl: '#', picUrl: null },
        { id: 's16', name: 'Aditi Joshi', year: '3rd Year', college: 'BITS Pilani', skills: ['Biotechnology', 'Research', 'Lab Techniques'], linkedinUrl: '#', picUrl: 'https://via.placeholder.com/90/DA70D6/FFFFFF?text=AJ' }
    ];

    const fakeItems = [
      { id: "item1", type: "donate", title: "Physics Textbook Vol 1", description: "Resnick Halliday Walker, good condition.", college: "IIT Bombay", image: null, category: "Books", contactEmail:"donor1@example.com", contactPhone: null, donorName: "Rohan V.", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() },
      { id: "item2", type: "request", title: "Scientific Calculator", description: "Casio fx-991MS or similar urgently needed for exam.", college: "IIT Bombay", image: null, category: "Other", contactEmail:"req1@example.com", requesterName: "Priya S.", requesterYear: "2nd Year", timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() },
      { id: "item3", type: "donate", title: "Old Study Lamp", description: "Working condition, bulb included.", college: "IIT Delhi", image: "lamp.jpg", category: "Other", contactEmail:"donor2@example.com", contactPhone: "9876543210", donorName: "Amit K.", timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
      { id: "item4", type: "donate", title: "Chemistry Notes", description: "Complete handwritten notes for 1st sem inorganic chemistry.", college: "IIT Bombay", image: null, category: "Notes", contactEmail:"donor3@example.com", contactPhone: null, donorName: "Sneha G.", timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
      { id: "item5", type: "request", title: "Need Electric Kettle", description: "Anyone has a spare electric kettle for hostel room?", college: "IIT Delhi", image: null, category: "Other", contactEmail:"req2@example.com", requesterName: "Vikram C.", requesterYear: "3rd Year", timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
      { id: "item6", type: "donate", title: "Lab Coat (Medium)", description: "Slightly used lab coat, medium size.", college: "BBDNIIT", image: "labcoat.png", category: "Lab Manuals", contactEmail:"donor4@example.com", contactPhone: null, donorName: "Deependra P.", timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() },
      { id: "item7", type: "request", title: "Previous Year Papers - CS", description: "Looking for past 5 year papers for Computer Science branch.", college: "BBDNIIT", image: null, category: "Exam Papers", contactEmail:"req3@example.com", requesterName: "Ayush P.", requesterYear: "2nd Year", timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() },
      { id: "item8", type: "donate", title: "Programming C Book", description: "Let Us C by Yashavant Kanetkar.", college: "BBDNIIT", image: null, category: "Books", contactEmail:"donor5@example.com", contactPhone: null, donorName: "Kritika S.", timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString() },
    ];

    const getUserProfile = () => { try { const user = localStorage.getItem(USER_PROFILE_KEY); if (!user) { const newUser = { ...defaultUser }; localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(newUser)); return newUser; } return JSON.parse(user); } catch (error) { console.error("Error getting user profile:", error); return { ...defaultUser }; } };
    const saveUserProfile = (profile) => { try { localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile)); } catch (error) { console.error("Error saving user profile:", error); alert("Could not save profile changes."); } };
    const updateUserCollege = (collegeName) => { const profile = getUserProfile(); profile.college = collegeName; saveUserProfile(profile); };
    const updateUserYear = (year) => { const profile = getUserProfile(); profile.year = year; saveUserProfile(profile); };
    const updateUserName = (newName) => { const profile = getUserProfile(); profile.name = newName; saveUserProfile(profile); };
    const updateUserPicture = (filename, previewDataUrl) => { const profile = getUserProfile(); profile.profilePictureFilename = filename; profile.profilePicturePreview = previewDataUrl; saveUserProfile(profile); };
    const incrementDonation = () => { const profile = getUserProfile(); profile.donations += 1; profile.level = calculateLevel(profile.donations); saveUserProfile(profile); return profile; };
    const calculateLevel = (donationCount) => { if (donationCount >= 20) return 'Super Contributor'; if (donationCount >= 10) return 'Senior Contributor'; if (donationCount >= 5) return 'Contributor'; if (donationCount >= 1) return 'Junior Contributor'; return 'New'; };
    const getLevelClass = (level) => { switch(level) { case 'Super Contributor': return 'level-super'; case 'Senior Contributor': return 'level-senior'; case 'Contributor': return 'level-contributor'; case 'Junior Contributor': return 'level-junior'; default: return 'level-new'; } };
    const getLevelIcon = (level) => { switch(level) { case 'Super Contributor': return 'fa-crown'; case 'Senior Contributor': return 'fa-star'; case 'Contributor': return 'fa-medal'; case 'Junior Contributor': return 'fa-award'; default: return 'fa-seedling'; } };
    const displayCollege = () => { const profile = getUserProfile(); const collegeName = profile.college || "Not Selected"; const displayElementIds = [ 'college-name-display', 'college-header-display', 'profile-college' ]; displayElementIds.forEach(id => { const element = document.getElementById(id); if (element) { element.textContent = collegeName; } }); const requiresCollege = ['dashboard.html', 'donate.html', 'request.html', 'profile.html', 'activity.html', 'seniors.html'].includes(currentPage); if (requiresCollege && !profile.college && currentPage !== 'college.html') { alert('Please select your college first.'); window.location.href = 'college.html'; } };
    const getActivityData = () => { try { const data = localStorage.getItem(ACTIVITY_FEED_KEY); return data ? JSON.parse(data) : []; } catch (error) { console.error("Error getting activity data:", error); return []; } };
    const saveActivityData = (data) => { try { localStorage.setItem(ACTIVITY_FEED_KEY, JSON.stringify(data)); } catch (error) { console.error("Error saving activity data:", error); } };
    const addActivityItem = (item) => { const activityData = getActivityData(); activityData.unshift(item); saveActivityData(activityData); };
    const clearActivityData = () => { try { localStorage.removeItem(ACTIVITY_FEED_KEY); console.log("DEBUG: Activity feed cleared."); } catch (error) { console.error("DEBUG: Error clearing activity feed:", error); } };


    if (currentPage === 'index.html') {
        getUserProfile();
        const googleLoginButton = document.getElementById('google-login-button');
        if (googleLoginButton) { googleLoginButton.addEventListener('click', () => { alert('Simulating Google Login...\nRedirecting to College Selection.'); window.location.href = 'college.html'; }); }
    }
    else if (currentPage === 'college.html') {
        const collegeSearchInput = document.getElementById('college-search'); const collegeListContainer = document.getElementById('college-list');
        if (collegeSearchInput && collegeListContainer) {
            const collegeItems = collegeListContainer.querySelectorAll('.college-item');
            collegeSearchInput.addEventListener('input', (e) => { const searchTerm = e.target.value.toLowerCase().trim(); collegeItems.forEach(item => { item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(searchTerm)); }); });
            collegeItems.forEach(item => { item.addEventListener('click', () => { const selectedCollege = item.dataset.college || item.textContent; const profile = getUserProfile(); if (profile.college && profile.college !== selectedCollege) { clearActivityData(); } updateUserCollege(selectedCollege); alert(`Selected: ${selectedCollege}\nRedirecting to Dashboard.`); window.location.href = 'dashboard.html'; }); });
        }
    }
    // --- UPDATED: Dashboard Ask AI Button ---
    else if (currentPage === 'dashboard.html') {
        displayCollege();
        const donateButton = document.getElementById('donate-button'); const requestButton = document.getElementById('request-button'); const askSeniorButton = document.getElementById('ask-senior-button'); const askAiButton = document.getElementById('ask-ai-button');
        if (donateButton) donateButton.addEventListener('click', () => window.location.href = 'donate.html');
        if (requestButton) requestButton.addEventListener('click', () => window.location.href = 'request.html');
        if (askSeniorButton) askSeniorButton.addEventListener('click', () => window.location.href = 'seniors.html');
        // Updated listener for Ask AI button
        if (askAiButton) askAiButton.addEventListener('click', () => {
            window.location.href = 'ask-ai.html'; // Redirect to the new AI chat page
        });
    }
    // --- END UPDATE ---

    else if (currentPage === 'profile.html') {
        const profile = getUserProfile(); const nameSpan = document.getElementById('profile-name'); const donationsSpan = document.getElementById('profile-donations'); const levelBadge = document.getElementById('profile-level'); const yearSelect = document.getElementById('profile-year'); const saveYearButton = document.getElementById('save-year-button'); const picDisplay = document.getElementById('profile-pic-display'); const picUpload = document.getElementById('profile-pic-upload'); const nameDisplayContainer = document.getElementById('profile-name-display-container'); const nameEditContainer = document.getElementById('profile-name-edit-container'); const editNameButton = document.getElementById('edit-name-button'); const saveNameButton = document.getElementById('save-name-button'); const cancelNameButton = document.getElementById('cancel-name-button'); const editNameInput = document.getElementById('edit-name-input'); const shareProfileButton = document.getElementById('share-profile-button'); const shareFeedbackElement = document.getElementById('share-feedback');
        displayCollege(); nameSpan.textContent = profile.name; donationsSpan.textContent = profile.donations; levelBadge.textContent = profile.level; levelBadge.className = `level-badge ${getLevelClass(profile.level)}`; levelBadge.innerHTML = `<i class="fas ${getLevelIcon(profile.level)} icon"></i> ${profile.level}`; if (profile.year) { yearSelect.value = profile.year; }
        if (profile.profilePicturePreview) { picDisplay.src = profile.profilePicturePreview; picDisplay.classList.remove('default-icon'); } else { picDisplay.src = ''; picDisplay.classList.add('default-icon'); }
        if(saveYearButton) { saveYearButton.addEventListener('click', () => { const currentProfile = getUserProfile(); const selectedYear = yearSelect.value; if (selectedYear) { if (currentProfile.year !== selectedYear) { updateUserYear(selectedYear); alert('Year of study saved!'); } else { alert('Year of study is already set to this value.'); } } else { alert('Please select your year of study.'); } }); }
        if(editNameButton && nameDisplayContainer && nameEditContainer && editNameInput) { editNameButton.addEventListener('click', () => { nameDisplayContainer.style.display = 'none'; editNameInput.value = nameSpan.textContent; nameEditContainer.style.display = 'flex'; editNameInput.focus(); }); }
        if(cancelNameButton && nameDisplayContainer && nameEditContainer) { cancelNameButton.addEventListener('click', () => { nameEditContainer.style.display = 'none'; nameDisplayContainer.style.display = 'flex'; }); }
        if(saveNameButton && nameDisplayContainer && nameEditContainer && editNameInput) { saveNameButton.addEventListener('click', () => { const currentProfile = getUserProfile(); const newName = editNameInput.value.trim(); if (newName && newName !== currentProfile.name) { updateUserName(newName); nameSpan.textContent = newName; alert('Name updated successfully!'); } else if (!newName) { alert('Name cannot be empty.'); } nameEditContainer.style.display = 'none'; nameDisplayContainer.style.display = 'flex'; }); }
        if (picUpload && picDisplay) { picUpload.addEventListener('change', (event) => { const file = event.target.files[0]; const maxSizeMB = 5; if (file && file.type.startsWith('image/')) { if (file.size > maxSizeMB * 1024 * 1024) { alert(`File is too large...`); picUpload.value = ''; return; } const reader = new FileReader(); reader.onload = (e) => { const previewDataUrl = e.target.result; picDisplay.src = previewDataUrl; picDisplay.classList.remove('default-icon'); updateUserPicture(file.name, previewDataUrl); alert(`Selected profile picture: ${file.name} (Preview updated)`); } ; reader.onerror = () => { alert('Error reading file.'); picDisplay.src = ''; picDisplay.classList.add('default-icon'); updateUserPicture(null, null); } ; reader.readAsDataURL(file); } else if (file) { alert('Please select a valid image file...'); picUpload.value = ''; } }); }
        if (shareProfileButton) { shareProfileButton.addEventListener('click', async () => { const profileCardElement = document.querySelector('.profile-card'); const currentProfile = getUserProfile(); if (!profileCardElement || typeof html2canvas === 'undefined') { alert("Error preparing share data..."); return; } shareProfileButton.disabled = true; shareProfileButton.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Generating Image...'; if (shareFeedbackElement) shareFeedbackElement.style.display = 'none'; try { const canvas = await html2canvas(profileCardElement, { scale: 2, useCORS: true }); canvas.toBlob(async (blob) => { if (!blob) { throw new Error("Canvas to Blob conversion failed."); } const fileName = `relearn_profile_${currentProfile.name.replace(/\s+/g, '_')}_${Date.now()}.png`; const file = new File([blob], fileName, { type: 'image/png' }); const shareData = { title: 'My Relearn Profile', text: `Check out ${currentProfile.name}'s profile on Relearn! College: ${currentProfile.college || 'N/A'}, Level: ${currentProfile.level}.`, files: [file] }; if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share(shareData); if (shareFeedbackElement) { shareFeedbackElement.textContent = 'Profile shared!'; shareFeedbackElement.style.display = 'block'; shareFeedbackElement.style.opacity = '1'; setTimeout(() => { if(shareFeedbackElement) shareFeedbackElement.style.opacity = '0'; }, 3000); } } else { await navigator.clipboard.writeText(shareData.text); if (shareFeedbackElement) { shareFeedbackElement.textContent = 'Sharing image not supported. Copied details!'; shareFeedbackElement.style.display = 'block'; shareFeedbackElement.style.opacity = '1'; setTimeout(() => { if(shareFeedbackElement) shareFeedbackElement.style.opacity = '0'; }, 4000); } } shareProfileButton.disabled = false; shareProfileButton.innerHTML = '<i class="fas fa-share-alt icon"></i> Share Profile'; }, 'image/png'); } catch (err) { if (err.name !== 'AbortError') { alert(`Could not generate or share profile image: ${err.message}`); if (shareFeedbackElement) shareFeedbackElement.style.display = 'none'; } shareProfileButton.disabled = false; shareProfileButton.innerHTML = '<i class="fas fa-share-alt icon"></i> Share Profile'; } }); }
    }

    else if (currentPage === 'seniors.html') {
        const seniorsGrid = document.getElementById('seniors-grid'); const userProfile = getUserProfile(); displayCollege();
        if (seniorsGrid) {
             const collegeSeniors = fakeSeniors.filter(senior => senior.college === userProfile.college); seniorsGrid.innerHTML = '';
             if (collegeSeniors.length === 0) { seniorsGrid.innerHTML = '<p class="no-activity-message"><i class="fas fa-search icon"></i> No seniors found for your college currently.</p>'; } else {
                 collegeSeniors.forEach(senior => {
                     const card = document.createElement('div'); card.className = 'senior-card glass';
                     const skillsHtml = senior.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('');
                     const picHtml = senior.picUrl ? `<img src="${senior.picUrl}" alt="${senior.name}" class="senior-pic">` : `<div class="senior-pic default-icon"></div>`;
                     card.innerHTML = ` ${picHtml} <h4>${senior.name}</h4> <p class="senior-year">${senior.year}</p> <div class="senior-skills"> ${skillsHtml || 'No skills listed'} </div> <div class="senior-actions"> <a href="${senior.linkedinUrl || '#'}" class="button-link linkedin-link" target="_blank" title="View LinkedIn Profile" ${!senior.linkedinUrl ? 'style="opacity:0.5; pointer-events:none;"' : ''}> <i class="fab fa-linkedin"></i> </a> <button class="connect-button" data-senior-id="${senior.id}" data-senior-name="${senior.name}" title="Connect with ${senior.name}"> <i class="fas fa-comments icon"></i> Connect </button> </div>`;
                     const connectBtn = card.querySelector('.connect-button');
                     if (connectBtn) { connectBtn.addEventListener('click', () => { const seniorId = connectBtn.dataset.seniorId; const seniorName = connectBtn.dataset.seniorName; window.location.href = `chat.html?seniorId=${seniorId}&seniorName=${encodeURIComponent(seniorName)}`; }); }
                     seniorsGrid.appendChild(card);
                 });
             }
        }
    }

    else if (currentPage === 'donate.html') {
        displayCollege(); const donateForm = document.getElementById('donate-form'); const userProfile = getUserProfile();
        if (donateForm) {
            donateForm.addEventListener('submit', (e) => {
                e.preventDefault(); const imageInput = document.getElementById('resource-image');
                const newItem = { type: 'donate', title: document.getElementById('resource-title').value, description: document.getElementById('resource-description').value, category: document.getElementById('resource-category').value, image: imageInput.files.length > 0 ? imageInput.files[0].name : null, contactEmail: document.getElementById('contact-email').value, contactPhone: document.getElementById('contact-phone').value || null, college: userProfile.college || 'Unknown', timestamp: new Date().toISOString(), donorName: userProfile.name, donorId: userProfile.id };
                addActivityItem(newItem); const updatedProfile = incrementDonation(); alert(`Donation submitted successfully!\nYour donations: ${updatedProfile.donations}\nYour level: ${updatedProfile.level}`); window.location.href = 'activity.html';
            });
        }
    }

    else if (currentPage === 'request.html') {
        displayCollege(); const requestForm = document.getElementById('request-form'); const userProfile = getUserProfile();
        if (requestForm) {
            requestForm.addEventListener('submit', (e) => {
                e.preventDefault(); if (!userProfile.year) { alert('Please set your "Year of Study"...'); window.location.href = 'profile.html'; return; }
                 const newItem = { type: 'request', title: document.getElementById('request-title').value, description: document.getElementById('request-description').value, category: document.getElementById('request-category').value, contactEmail: document.getElementById('request-contact').value, college: userProfile.college || 'Unknown', timestamp: new Date().toISOString(), requesterName: userProfile.name, requesterYear: userProfile.year, requesterId: userProfile.id };
                 addActivityItem(newItem); alert('Request submitted successfully!'); window.location.href = 'activity.html';
            });
        }
    }

    else if (currentPage === 'activity.html') {
        displayCollege();
        const activityGrid = document.getElementById('activity-grid');
        if (activityGrid) {
            let activityData = getActivityData();
            if (activityData.length === 0 && typeof fakeItems !== 'undefined' && fakeItems.length > 0) {
                 activityData = fakeItems;
                 console.log("DEBUG: Using fakeItems for activity feed. Count:", activityData.length);
            } else if(activityData.length === 0){
                 console.log("DEBUG: No activity data in localStorage or fakeItems.");
            } else {
                 console.log("DEBUG: Using activity data from localStorage. Count:", activityData.length);
            }

            const currentUserProfile = getUserProfile();
            activityGrid.innerHTML = '';

            if (activityData.length === 0) {
                activityGrid.innerHTML = '<p class="no-activity-message"><i class="fas fa-wind icon"></i> Nothing here yet. Be the first to donate or request!</p>';
            } else {
                activityData.forEach((item, index) => {
                    const card = document.createElement('div'); card.className = 'activity-card glass';
                    const date = new Date(item.timestamp); const formattedDate = date.toLocaleString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
                    let imageHtml = '';
                    if (item.type === 'donate') { if (item.image) { imageHtml = `<div class="card-image-placeholder"><i class="fas fa-image icon"></i><br><small>${item.image}</small></div>`; } else { imageHtml = `<div class="card-image-placeholder no-image"><i class="fas fa-box-open icon"></i> No Image Provided</div>`; } } else { imageHtml = `<div class="card-image-placeholder no-image"><i class="fas fa-search icon"></i> Resource Request</div>`; }
                    let userInfoHtml = '';
                    if (item.type === 'donate') { userInfoHtml = `<div><i class="fas fa-user icon"></i><span class="user-info">${item.donorName || 'Unknown User'}</span></div>`; } else { userInfoHtml = ` <div><i class="fas fa-user icon"></i><span class="user-info">${item.requesterName || 'Unknown User'}</span></div> <div><i class="fas fa-calendar-alt icon"></i> Year: ${item.requesterYear || 'N/A'}</div> `; }
                    card.innerHTML = ` ${imageHtml} <div class="card-content"> <div class="card-header"> <h4 class="card-title">${item.title}</h4> <span class="card-type-badge ${item.type}">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span> </div> <p class="card-description">${item.description}</p> <div class="card-footer"> ${userInfoHtml} <div><i class="fas fa-tags icon"></i> Category: ${item.category}</div> <div><i class="fas fa-university icon"></i> College: ${item.college || 'N/A'}</div> <div><i class="fas fa-envelope icon"></i> Contact: ${item.contactEmail}</div> ${item.type === 'donate' && item.contactPhone ? `<div><i class="fas fa-phone icon"></i> Phone: ${item.contactPhone}</div>` : ''} <div><i class="far fa-clock icon"></i> Posted: ${formattedDate}</div> </div> </div>`;
                    activityGrid.appendChild(card);
                });
            }
        } else { console.error("Could not find activity-grid element."); }
    }

    // --- ADDED: Ask AI Chat Page Logic ---
    else if (currentPage === 'ask-ai.html') {
        console.log("DEBUG: Initializing Ask AI Page"); // Added Debug Log

        const messageInput = document.getElementById('ai-message-input');
        const sendBtn = document.getElementById('ai-send-btn');
        const chatMessages = document.getElementById('ai-chat-messages');
        const typingIndicator = document.getElementById('ai-typing-indicator');

        // --- !!! IMPORTANT: REPLACE WITH YOUR ACTUAL API KEY !!! ---
        // --- WARNING: Storing API keys in frontend code is insecure! ---
        // --- For production, use a backend proxy (like Cloud Functions) ---
        const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"; // <-- PUT YOUR KEY HERE (INSECURE)
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

        if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY") {
             alert("Please replace 'YOUR_GEMINI_API_KEY' in script.js with your actual Gemini API key.");
        }

        // Function to add a message to the chat display
        function addMessageToUI(text, type) { // type = 'sent' or 'received'
            if (!chatMessages) return;
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${type}`; // 'sent' or 'received'
            messageDiv.innerHTML = `
                ${text.replace(/\n/g, '<br>')} {/* Render newlines as <br> */}
                <span class="message-time">${time}</span>
            `;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }

        // Function to call Gemini API
        async function askGemini(prompt) {
            if (typingIndicator) typingIndicator.style.display = 'block'; // Show thinking indicator
            sendBtn.disabled = true; // Disable send button

            const payload = {
                contents: [{ parts: [{ text: prompt }] }]
                // Add safety settings if needed:
                // safetySettings: [
                //     { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                //     { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                //     { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                //     { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
                // ]
            };

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("API Error Response:", errorData);
                    throw new Error(`API Error (${response.status}): ${errorData?.error?.message || 'Unknown error'}`);
                }

                const data = await response.json();

                // Extract text, handling potential variations in response structure
                let aiResponse = "Sorry, I couldn't process that."; // Default error message
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                    aiResponse = data.candidates[0].content.parts[0].text;
                } else if (data.promptFeedback && data.promptFeedback.blockReason) {
                     aiResponse = `Blocked due to: ${data.promptFeedback.blockReason}`; // Show block reason
                }

                addMessageToUI(aiResponse, 'received'); // Display AI response

            } catch (error) {
                console.error("Error calling Gemini API:", error);
                addMessageToUI(`Error: ${error.message}`, 'received'); // Show error in chat
            } finally {
                if (typingIndicator) typingIndicator.style.display = 'none'; // Hide indicator
                sendBtn.disabled = false; // Re-enable send button
            }
        }


        if (messageInput && sendBtn && chatMessages) {
            function handleSend() {
                const messageText = messageInput.value.trim();
                if (messageText && GEMINI_API_KEY !== "YOUR_GEMINI_API_KEY") {
                    addMessageToUI(messageText, 'sent'); // Display user message immediately
                    messageInput.value = '';
                    askGemini(messageText); // Call the API function
                } else if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY") {
                     alert("Please add your Gemini API key to script.js first!");
                }
            }

            sendBtn.addEventListener('click', handleSend);
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSend();
                }
            });
        } else {
            console.error("DEBUG: Ask AI Chat UI elements not found on ask-ai.html");
        }
    }
    // --- END Ask AI Chat Page Logic ---

}); // End of DOMContentLoaded listener