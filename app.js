// Quest data loaded from questdata.js (leveling_data)
// Rune data loaded from runedata.js (RUNE_DATA)

// State management
    const state = {
      showAllTips: false,
      currentDifficulty: 'normal',
      theme: localStorage.getItem('d2r-theme') || 'dark',
      isWide: false,
      isCompact: false
    };

    // Initialize
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();
    selectFirstIncompleteTab();
    updateTipsIcon();

    function updateThemeIcon() {
      const icon = document.querySelector('#theme-toggle i');
      const tooltip = document.querySelector('#theme-toggle .btn-tooltip');
      if (state.theme === 'dark') {
        icon.className = 'fa-regular fa-sun';
        tooltip.textContent = 'Light theme';
      } else {
        icon.className = 'fa-regular fa-moon';
        tooltip.textContent = 'Dark theme';
      }
    }

    function updateCompactIcon() {
      const icon = document.querySelector('#compact-toggle i');
      const tooltip = document.querySelector('#compact-toggle .btn-tooltip');
      if (state.isCompact) {
        icon.className = 'fas fa-expand-alt';
        tooltip.textContent = 'Normal mode';
      } else {
        icon.className = 'fas fa-compress-alt';
        tooltip.textContent = 'Compact mode';
      }
    }

    function updateTipsIcon() {
      const icon = document.querySelector('#toggle-tips i');
      const tooltip = document.querySelector('#toggle-tips .btn-tooltip');
      if(state.showAllTips) {
        icon.className = 'fas fa-lightbulb';
        tooltip.textContent = 'Hide all tips';
      } else {
        icon.className = 'far fa-lightbulb';
        tooltip.textContent = 'Show all tips';
      }
    }

    function updateTabs() {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      const activeTab = document.querySelector(`.tab[data-difficulty="${state.currentDifficulty}"]`);
      if(activeTab) {
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
      }
    }

    // Event Listeners
    document.getElementById('theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('d2r-theme', state.theme);
      updateThemeIcon();
    });

    document.getElementById('width-toggle').addEventListener('click', () => {
      state.isWide = !state.isWide;
      document.getElementById('content').classList.toggle('wide', state.isWide);
    });

    document.getElementById('compact-toggle').addEventListener('click', () => {
      state.isCompact = !state.isCompact;
      updateCompactIcon();
      renderContent();
    });

    document.getElementById('info-btn').addEventListener('click', () => {
      document.getElementById('info-modal').classList.add('active');
    });

    document.getElementById('modal-close').addEventListener('click', () => {
      document.getElementById('info-modal').classList.remove('active');
    });

    document.getElementById('info-modal').addEventListener('click', (e) => {
      if (e.target.id === 'info-modal') {
        document.getElementById('info-modal').classList.remove('active');
      }
    });

    document.getElementById('runes-btn').addEventListener('click', () => {
      populateRuneTable();
      document.getElementById('runes-modal').classList.add('active');
    });

    document.getElementById('runes-close').addEventListener('click', () => {
      document.getElementById('runes-modal').classList.remove('active');
    });

    document.getElementById('runes-modal').addEventListener('click', (e) => {
      if (e.target.id === 'runes-modal') {
        document.getElementById('runes-modal').classList.remove('active');
      }
    });
	
	document.getElementById('runewords-btn').addEventListener('click', () => {
	  window.open('https://diablo2.io/runewords/', '_blank');
	});

    function populateRuneTable() {
      const tbody = document.getElementById('rune-table-body');
      tbody.innerHTML = '';

      RUNE_DATA.forEach(rune => {
        const row = document.createElement('tr');

        let countessTags = '';
        if (rune.countess.includes('N')) countessTags += '<span class="countess-tag countess-normal">N</span>';
        if (rune.countess.includes('NM')) countessTags += '<span class="countess-tag countess-nightmare">NM</span>';
        if (rune.countess.includes('H') && !rune.countess.includes('NM')) countessTags += '<span class="countess-tag countess-hell">H</span>';

        const nameCell = `<span class="rune-name">${rune.name}</span>${countessTags ? '<div class="countess-tags">' + countessTags + '</div>' : ''}`;

        row.innerHTML = `
          <td>${rune.num}</td>
          <td>${nameCell}</td>
          <td>${rune.clvl || 'None'}</td>
          <td>${rune.weapon}</td>
          <td>${rune.armor}</td>
          <td>${rune.shield || rune.armor}</td>
        `;
        tbody.appendChild(row);
      });
    }

    document.querySelectorAll('.tab-icon').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const diff = btn.dataset.difficulty;

        if (action === 'reset') {
          if (confirm(`Reset all progress for ${diff.charAt(0).toUpperCase() + diff.slice(1)}?`)) {
            const progress = loadProgress();
            Object.keys(progress).forEach(key => {
              if (key.startsWith(diff + '-')) {
                delete progress[key];
              }
            });
            saveProgress(progress);
            renderContent();
          }
        } else if (action === 'complete') {
          if (confirm(`Mark all steps as complete for ${diff.charAt(0).toUpperCase() + diff.slice(1)}?`)) {
            const progress = loadProgress();
            Object.keys(leveling_data[diff]).forEach(actNum => {
              const key = `${diff}-${actNum}`;
              const stepCount = leveling_data[diff][actNum].steps.length;
              progress[key] = Array(stepCount).fill(true);
            });
            saveProgress(progress);
            checkAndAdvanceToNextDifficulty();
            renderContent();
          }
        }
      });
    });

    function loadProgress() {
      const saved = localStorage.getItem('d2r-progress');
      return saved ? JSON.parse(saved) : {};
    }

    function saveProgress(progress) {
      localStorage.setItem('d2r-progress', JSON.stringify(progress));
    }

    function calculateProgress() {
      const progress = loadProgress();
      let completed = 0;
      let total = 0;

      const acts = Object.keys(leveling_data[state.currentDifficulty]);

      acts.forEach(actNum => {
        const key = `${state.currentDifficulty}-${actNum}`;
        const steps = progress[key] || [];
        const actData = leveling_data[state.currentDifficulty][actNum];
        completed += steps.filter(s => s).length;
        total += actData.steps.length;
      });

      return { completed, total };
    }

    function calculateActProgress(actNum) {
      const progress = loadProgress();
      const key = `${state.currentDifficulty}-${actNum}`;
      const steps = progress[key] || [];
      const actData = leveling_data[state.currentDifficulty][actNum];
      const completed = steps.filter(s => s).length;
      const total = actData.steps.length;
      return { completed, total };
    }

    function getProgressForDifficulty(difficulty) {
      const progress = loadProgress();
      let completed = 0;
      let total = 0;

      const acts = Object.keys(leveling_data[difficulty]);

      acts.forEach(actNum => {
        const key = `${difficulty}-${actNum}`;
        const steps = progress[key] || [];
        const actData = leveling_data[difficulty][actNum];
        completed += steps.filter(s => s).length;
        total += actData.steps.length;
      });

      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, percentage };
    }

    function selectFirstIncompleteTab() {
      const normalProgress = getProgressForDifficulty('normal');
      const nightmareProgress = getProgressForDifficulty('nightmare');

      if(normalProgress.percentage < 100) {
        state.currentDifficulty = 'normal';
      } else if(nightmareProgress.percentage < 100) {
        state.currentDifficulty = 'nightmare';
      } else {
        state.currentDifficulty = 'hell';
      }
      updateTabs();
    }

    function checkAndAdvanceToNextDifficulty() {
      const currentProgress = getProgressForDifficulty(state.currentDifficulty);

      if(currentProgress.percentage === 100) {
        if(state.currentDifficulty === 'normal') {
          state.currentDifficulty = 'nightmare';
          updateTabs();
          renderContent();
        } else if(state.currentDifficulty === 'nightmare') {
          state.currentDifficulty = 'hell';
          updateTabs();
          renderContent();
        }
      }
    }

    function updateProgressBar() {
      const { completed, total } = calculateProgress();
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      const fill = document.getElementById('progress-fill');
      fill.style.width = percentage + '%';
      fill.textContent = `${completed}/${total} (${percentage}%)`;
    }

    function renderContent() {
      const container = document.getElementById('content');
      container.innerHTML = '';

      const acts = Object.keys(leveling_data[state.currentDifficulty]);

      acts.forEach(actNum => {
        const act = leveling_data[state.currentDifficulty][actNum];
        const actSection = document.createElement('section');
        actSection.className = 'act-section';
        if (state.isCompact) {
          actSection.classList.add('compact');
        }

        const actHeader = document.createElement('div');
        actHeader.className = 'act-header clickable';

        const titleSection = document.createElement('div');
        titleSection.className = 'act-title-section';

        const title = document.createElement('h2');
        title.className = 'act-title';
        title.textContent = act.title;

        const { completed, total } = calculateActProgress(actNum);
        const actProgress = document.createElement('span');
        actProgress.className = 'act-progress';
        actProgress.textContent = `${completed}/${total} (${Math.round(completed/total*100)}%)`;

        titleSection.appendChild(title);
        titleSection.appendChild(actProgress);

        const actControls = document.createElement('div');
        actControls.className = 'act-controls';

        const completeBtn = document.createElement('i');
        completeBtn.className = 'fas fa-check-double act-icon clickable';
        completeBtn.title = 'Complete Act';
        completeBtn.setAttribute('aria-label', 'Complete Act');
        completeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Mark all steps in Act ${actNum} as complete?`)) {
            const progress = loadProgress();
            const key = `${state.currentDifficulty}-${actNum}`;
            progress[key] = Array(act.steps.length).fill(true);
            saveProgress(progress);
            checkAndAdvanceToNextDifficulty();
            renderContent();
          }
        });

        const resetBtn = document.createElement('i');
        resetBtn.className = 'fas fa-redo-alt act-icon clickable';
        resetBtn.title = 'Reset Act';
        resetBtn.setAttribute('aria-label', 'Reset Act');
        resetBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Reset Act ${actNum}?`)) {
            const progress = loadProgress();
            const key = `${state.currentDifficulty}-${actNum}`;
            delete progress[key];
            saveProgress(progress);
            renderContent();
          }
        });

        const chevron = document.createElement('i');
        chevron.className = 'fas fa-chevron-down act-chevron';

        actControls.appendChild(completeBtn);
        actControls.appendChild(resetBtn);
        actControls.appendChild(chevron);

        actHeader.appendChild(titleSection);
        actHeader.appendChild(actControls);
        actSection.appendChild(actHeader);

        const actContent = document.createElement('div');
        actContent.className = 'act-content';

        const progress = loadProgress();
        const key = `${state.currentDifficulty}-${actNum}`;
        const completedSteps = progress[key] || [];

        act.steps.forEach((step, index) => {
          const stepDiv = document.createElement('div');
          stepDiv.className = 'step clickable';
          const isCompleted = completedSteps[index];
          if (isCompleted) {
            stepDiv.classList.add('completed');
          }

          const stepNumber = document.createElement('span');
          stepNumber.className = 'step-number';
          stepNumber.textContent = `${index + 1}.`;

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.className = 'checkbox';
          checkbox.checked = isCompleted || false;

          const content = document.createElement('div');
          content.className = 'step-content';

          const textContainer = document.createElement('div');
          textContainer.style.flex = '1';
          textContainer.style.minWidth = '200px';

          const textSpan = document.createElement('span');
          textSpan.className = 'step-text';
          textSpan.textContent = step.text;

          const locationSpan = document.createElement('div');
          locationSpan.className = 'step-location';
          locationSpan.textContent = step.location;

          textContainer.appendChild(textSpan);
          textContainer.appendChild(locationSpan);
          content.appendChild(textContainer);

          const badges = document.createElement('div');
          badges.className = 'step-badges';



          if (step.layout && !isCompleted) {
            const layoutIcon = document.createElement('i');
            layoutIcon.className = 'fas fa-map icon-btn clickable';
            const layoutTooltip = document.createElement('div');
            layoutTooltip.className = 'tooltip';
            layoutTooltip.textContent = 'Layout guide';
            layoutIcon.appendChild(layoutTooltip);
            badges.appendChild(layoutIcon);
          }

          if (step.tips && !isCompleted) {
            const infoIcon = document.createElement('i');
            infoIcon.className = 'fas fa-info-circle icon-btn clickable';

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = step.tips;
            infoIcon.appendChild(tooltip);

            badges.appendChild(infoIcon);
          }

          content.appendChild(badges);

          stepDiv.appendChild(stepNumber);
          stepDiv.appendChild(checkbox);
          stepDiv.appendChild(content);

          stepDiv.addEventListener('click', (e) => {
            if (!e.target.classList.contains('icon-btn') && e.target.className !== 'tooltip' && e.target.tagName !== 'I') {
              completedSteps[index] = !completedSteps[index];
              checkbox.checked = completedSteps[index];
              progress[key] = completedSteps;
              saveProgress(progress);
              checkAndAdvanceToNextDifficulty();

              const allComplete = completedSteps.length === act.steps.length && completedSteps.every(s => s);
              if (allComplete) {
                actSection.classList.add('collapsed');
              }

              renderContent();
            }
          });

          actContent.appendChild(stepDiv);

          if (!isCompleted && state.showAllTips) {
            if (step.tips) {
              const tipsDiv = document.createElement('div');
              tipsDiv.className = 'extra-info tip';
              const icon = document.createElement('i');
              icon.className = 'fas fa-info-circle extra-info-icon';
              const text = document.createElement('span');
              text.textContent = step.tips;
              tipsDiv.appendChild(icon);
              tipsDiv.appendChild(text);
              actContent.appendChild(tipsDiv);
            }

            if (step.layout) {
              const layoutDiv = document.createElement('div');
              layoutDiv.className = 'extra-info layout';
              const icon = document.createElement('i');
              icon.className = 'fas fa-map extra-info-icon';
              const text = document.createElement('span');

              let layoutText = step.layout;
              if (step.waypointInfo && step.waypoint) {
                layoutText = `${step.waypointInfo}: ${step.layout}`;
              }
              text.textContent = layoutText;

              if (step.layoutUrl) {
                text.innerHTML += ' ';
                const link = document.createElement('a');
                link.href = step.layoutUrl;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'layout-link clickable';
                link.textContent = '[View Map]';
                text.appendChild(link);
              }
              layoutDiv.appendChild(icon);
              layoutDiv.appendChild(text);
              actContent.appendChild(layoutDiv);
            }
          }
        });

        actSection.appendChild(actContent);
        container.appendChild(actSection);

        actHeader.addEventListener('click', (e) => {
          if (!e.target.classList.contains('act-icon')) {
            actSection.classList.toggle('collapsed');
          }
        });

        if (completed === total && total > 0) {
          actSection.classList.add('collapsed');
        }
      });

      updateProgressBar();
    }

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-icon')) {
          document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          state.currentDifficulty = tab.dataset.difficulty;
          renderContent();
        }
      });
    });

    document.getElementById('toggle-tips').addEventListener('click', () => {
      state.showAllTips = !state.showAllTips;
      updateTipsIcon();
      renderContent();
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
          modal.classList.remove('active');
        });
      }
    });

    // Initial render
    renderContent();