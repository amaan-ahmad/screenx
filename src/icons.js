const twitterIcon = () => {
  return `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    x="0px" 
    y="0px"
    width="24" 
    height="24"
    viewBox="0 0 172 172"
    style=" fill:#000000;">
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
      <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M172,30.82226c-6.4388,2.85547 -12.9056,5.01107 -20.07226,5.73894c7.16667,-4.3112 12.9056,-11.47787 15.76107,-19.3724c-7.16667,4.31119 -14.33333,7.16667 -22.19988,8.6224c-7.16667,-7.16667 -16.48893,-11.47787 -26.51106,-11.47787c-19.3724,0 -35.13347,15.76107 -35.13347,35.10547c0,2.88346 0,5.73893 0.72786,7.89453c-29.39453,-1.42774 -55.17773,-15.06119 -72.39453,-36.56119c-3.58333,5.03906 -5.01107,11.47786 -5.01107,17.91667c0,12.20573 6.43881,22.95573 15.76107,29.39453c-5.73893,-0.72786 -11.44987,-2.1556 -15.76107,-4.31119c0,0 0,0 0,0.72786c0,17.18881 12.17774,31.52214 27.93881,34.4056c-2.85547,0.69988 -5.71094,1.42774 -9.29427,1.42774c-2.1556,0 -4.3112,0 -6.4668,-0.72786c4.31119,14.33333 17.2168,24.38346 32.97786,24.38346c-12.17773,9.32227 -27.23893,15.03321 -43.72786,15.03321c-2.85547,0 -5.73893,0 -8.5944,-0.69988c15.76107,10.02214 34.4056,15.76107 53.75,15.76107c65.22787,0 100.33333,-53.75 100.33333,-100.33333c0,-1.42774 0,-2.85547 0,-4.31119c7.16667,-5.01107 12.9056,-11.44988 17.91667,-18.61654">
      </path></g></g>
    </svg>
`;
};
const linkedinIcon = () => {
  return `  
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVRIie2UO04DMRRFj6eZBaBISKFENBQ0sKAkbVp2wTqSTdCwhpiGFUQoVRYwh4KR4jigDIkNDVeyZL+r5+PnH+qDGtXOcurUlXof1AjcUkcxqB0QKgFsKk4OEJossAQu+7YoQlBNxqMQwgZAvQA25wLyCkZJ/+rcyeGwgjfgic9zeQSuSwOKa2+LQqYj3hqYAWOgBe6A5wNC+vx+6N18EWv7F7zLOxXwndRpmpffosFS5+pWnWfWy+BVHvHWvfWexds0b+8W5Qdbwjt5i4bqH/D3gF/5i2oCbIDXioDYABMgUrYSgRUw/QCWxi4JD0xMXgAAAABJRU5ErkJggg=="
    />
  `;
};
const githubIcon = () => {
  return `
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVRIiZ2WT0hVQRTGv3mkZZDan40aglGbCCLMEIIMJC2I2hSJLTIIjaJdm6BIxCyqRdC2RRAtahEYLTK1bNHCMjFK2mSLIgNLbZma79finpv3Tfd6fZ7Nfeff982ZOWfmOaUIUChpr6RGSRsllZtrXNJXST2SBpxzc2lYSQSlwDXgF+kyDXQBJUl4LoGkWdJtSevMNCLpsaRRq0RW2TZJhyRtN9ukpLPOuQdpVWSAq5GV9gLVS6i+GuiznCxwBYgtIkwISeaAc2kEMfmtwKxhdCYFHbfVzAKN+ZJEcPYbRhZo8p2lwKStpC1iPw88BVoW2wqgCXgCtJt+xrB+5DSIdRdArwcwEDmvR8BdYAgYAwaBO8C9SMxIJPe52bpCQyELLVztET38v5MXlf5Ibo3ZpoCCjIJhLJH0zjn31tuVjylH4suH8Idz7o2k95LWSqrLSGowX7dXzUpJzXkSHQRWRfQQsyEjqdKUUS/ppKTNeRJtktQS0cMKKzOSykwZV67szpMkLu/fLZKJGP94CSyTaDYGkxUR1npgg6StRlKu5UkVcFnSvKT1Zvsu4Ia14X2gFigAHFBlA5eP/LTFyjBumf26gH2mDPtLA+psDpYiU8AeL3/QfPWyCqbNUAOsAU4Bqy24HLgJfE4gGCPYlTKPZEdkAQWhscuMz0w/AbwgmKUwpgh47ZEMAUVxB0VwR0L0FgdKWDiPNrN1A6+AC8BFYDihoksxJK3mmwCKfecxgqt9huCqrwD6gd8JBKF88nAOGEYWOBpXrYBOS54h8lyYL8vCK7rFvn3AfCTmtOUCdMSSWGCG4BnOWnAPsNN8ELQsvg7sIvcp72CxpzxC2ETuDIXnc9i+tfZt97ZxAjiSSuCRlRB041LmaIpg24uT8FLLI5iBOgXPSaWkCnN9k/RFwR/Il845/67Mkb8Z6Ujb7nxZTQAAAABJRU5ErkJggg=="
    />
  `;
};

export { githubIcon, linkedinIcon, twitterIcon };
